import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import appRoot from 'app-root-path';
import { vol } from "memfs";

import * as logger from '../logger'

import { benchmarkBusinessValidation } from './validation.business';
import { BaseMeasure, Benchmark } from './benchmarks.types';

jest.mock('fs-extra');

const measuresJson: BaseMeasure[] = JSON.parse(
    fs.readFileSync(path.join(appRoot + '', 'measures/2023/measures-data.json'), 'utf8')
);

const benchmarksJson: Benchmark[] = JSON.parse(
    fs.readFileSync(path.join(appRoot + '', 'staging/2023/benchmarks/json/benchmarks.json'), 'utf8')
);

const benchmarksCahpsJson: any[] = JSON.parse(
    fs.readFileSync(path.join(appRoot + '', 'staging/2023/benchmarks/json/benchmarks_cahps.json'), 'utf8')
);


describe('validation.business', () => {
    let volatileMeasures: any[];
    let volatileBenchmarks: any[];
    let volatileBenchmarksCahps: any[];
    let logSpy: any, warningSpy: any;

    const mockFileSystemResponse = (measures: any[], benchmarks: any[], benchmarksCahps: any[]) => {
        vol.fromNestedJSON({
            'measures/2023': {
                'measures-data.json': JSON.stringify(measures),
            },
            'staging/2023/benchmarks/json': {
                'benchmarks.json': JSON.stringify(benchmarks),
                'benchmarks_cahps.json': JSON.stringify(benchmarksCahps)
            }
        });
    };

    const testErrorsThrown = (message: string, changesToMerge: any) => {
        try {
            const modifiedBenchmarks = _.merge([], _.cloneDeep(volatileBenchmarks), changesToMerge)

            mockFileSystemResponse(
                volatileMeasures, 
                modifiedBenchmarks,
                volatileBenchmarksCahps
            );
            benchmarkBusinessValidation('benchmarks.json', 2023);

            expect('').toBe('No error thrown when one expected');
        } catch (errors: any) {
            expect(_.isArray(errors)).toBe(true);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toContain(message);
        }
    }

    beforeEach(() => {
        volatileMeasures = [...measuresJson] ;
        volatileBenchmarks = [...benchmarksJson];
        volatileBenchmarksCahps = [...benchmarksCahpsJson];
        
        logSpy = jest.spyOn(logger, 'info').mockImplementation(jest.fn());
        warningSpy = jest.spyOn(logger, 'warning').mockImplementation(jest.fn());

        mockFileSystemResponse(volatileMeasures, volatileBenchmarks, volatileBenchmarksCahps);
    });

    afterEach(() => {
        vol.reset();
        jest.restoreAllMocks();
    });

    it('validates 2023 benchmarks data', () => {
        const result = benchmarkBusinessValidation('benchmarks.json', 2023);

        expect(logSpy).not.toBeCalled();
        expect(result).toBeFalsy();
    });

    it('throws an error if a benchmark does not have a measureId', () => {
        testErrorsThrown(
            'no MeasureId provided for benchmark:',
            {0: { measureId: null }},
        )
    })

    it('throws an error if a benchmark has mismatched data with isHighPriority', () => {
        testErrorsThrown(
            'Property mismatch for isHighPrority between Benchmark of id 127 and its Measure\'s data. Measure expected false received true.',
            {2: { isHighPriority: true }},
        )
    })

    it('throws an error if a benchmark has mismatched data with isInverse', () => {
        testErrorsThrown(
            'Property mismatch for isInverse between Benchmark of id 127 its Measure\'s data. Measure expected false received true.',
        {2: {isInverse: true}});
    })

    it('throws an error if a benchmark has no measure data for the requested PY', () => {
        testErrorsThrown(
            'No comparable measure found for Benchmark with measureId: 89080908',
            [{measureId: '89080908'}]
        )
    })
});