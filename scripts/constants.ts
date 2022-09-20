//These are only needed if the csv column names do not match the measures-data field names.
export const BASE_CSV_COLUMN_NAMES = {
    'title': 'title',
    'description': 'description',
    'measureId': 'measure_id',
    'yearRemoved': 'Year Removed',
    'firstPerformanceYear': 'Year Added',
}

export const IA_CSV_COLUMN_NAMES = {
    ...BASE_CSV_COLUMN_NAMES,
    'weight': 'weight',
    'subcategoryId': 'subcategory_name'
};

export const PI_CSV_COLUMN_NAMES = {
    ...BASE_CSV_COLUMN_NAMES,
    'required': 'required',
    'isRequired': 'required',
    'metricType': 'name',
    'isBonus': 'bonus',
    'reportingCategory': 'reporting_category',
    'substitutes': 'substitutes',
    'exclusion': 'exclusions',
};

export const QUALITY_CSV_COLUMN_NAMES = {
    'title': 'Measure Title',
    'eMeasureId': 'CMS eCQM ID',
    'nqfEMeasureId': 'eCQM NQF',
    'nqfId': 'NQF',
    'measureId': 'Quality Number (#) / QCDR #',
    'primarySteward': 'Primary Measure Steward',
    'allowedVendors': 'Allowed QCDR Vendor ID',
    'description': 'Measure Description',
    'measureType': 'Measure Type  ',
    'isHighPriority': 'High Priority',
    'submissionMethods': 'Collection Type(s) for Submission',
    'measureSets': 'Specialty Measure Sets',
    'isInverse': 'Inverse',
    'metricType': 'Metric Type',
    'overallAlgorithm': 'Calculation Type',
    'clinicalGuidelineChanged': 'Collection Type(s) where Suppressed',
    'historic_benchmarks': 'Collection Type(s) where Historic Benchmark Removed',
    'icdImpacted': 'Collection Type(s) where Truncated',
    'allowedPrograms': 'Allowed Program(s)',
    'isRiskAdjusted': 'Is Risk Adjusted ',
    'yearRemoved': 'Year Removed',
    'firstPerformanceYear': 'Year Added',
};

export const ARRAY_CSV_FIELDS = [
    'substitutes',
    'exclusions',
    'Collection Type(s) for Submission',
    'Allowed QCDR Vendor ID',
    'Allowed Program(s)',
    'Specialty Measure Sets',
    'Collection Type(s) where Suppressed',
    'Collection Type(s) where Historic Benchmark Removed',
    'Collection Type(s) where Truncated',
]

export const BOOLEAN_CSV_FIELDS = [
    'Inverse',
    'Is Risk Adjusted ',
    'High Priority',
]

export const METRIC_TYPES = [
    'registrySinglePerformanceRate',
    'singlePerformanceRate',
    'multiPerformanceRate',
    'nonProportion',
    'costScore',
]

export const OVERALL_ALGORITHM = [
    'weightedAverage',
    'simpleAverage',
    'overallStratumOnly',
]

export const COLLECTION_TYPES_FIELDS = [
    'clinicalGuidelineChanged',
    'historic_benchmarks',
    'icdImpacted',
]


export const COLLECTION_TYPES = {
    'Part B Claims': 'claims',
    'CSV': 'certifiedSurveyVendor',
    'eCQM': 'electronicHealthRecord',
    'CMS WI': 'cmsWebInterface',
    'Admin Claims': 'administrativeClaims',
    'MIPS CQM': 'registry',
    'QCDR': 'registry',
}

export const ALLOWED_PROGRAMS = [
    'MIPS',
    'APP',
    'PCF',
]

export const MEASURE_TYPES = {
    'process': 'process',
    'outcome': 'outcome',
    'patient engagement/experience': 'patientEngagementExperience',
    'efficiency': 'efficiency',
    'intermediateoutcome': 'intermediateOutcome',
    'structure': 'structure',
    'patientreportedoutcome': 'patientReportedOutcome'
};

export const MEASURE_SETS = {
    'Allergy/Immunology': 'allergyImmunology',
    'Anesthesiology': 'anesthesiology',
    'Cardiology': 'cardiology',
    'Electro-physiologyCardiacSpecialist': 'electrophysiologyCardiacSpecialist',
    'Gastro-enterology': 'gastroenterology',
    'Dermatology': 'dermatology',
    'EmergencyMedicine': 'emergencyMedicine',
    'FamilyMedicine': 'familyMedicine',
    'InternalMedicine': 'internalMedicine',
    'Obstetrics/Gynecology': 'obstetricsGynecology',
    'Ophthalmology/Optometry': 'ophthalmology',
    'OrthopedicSurgery': 'orthopedicSurgery',
    'Otolaryngology': 'otolaryngology',
    'Pathology': 'pathology',
    'Pediatrics': 'pediatrics',
    'PhysicalMedicine': 'physicalMedicine',
    'PlasticSurgery': 'plasticSurgery',
    'PreventiveMedicine': 'preventiveMedicine',
    'Neurology': 'neurology',
    'Mental/Behavioral Health and Psychiatry': 'mentalBehavioralHealth',
    'DiagnosticRadiology': 'diagnosticRadiology',
    'InterventionalRadiology': 'interventionalRadiology',
    'VascularSurgery': 'vascularSurgery',
    'GeneralSurgery': 'generalSurgery',
    'ThoracicSurgery': 'thoracicSurgery',
    'Urology': 'urology',
    'Oncology/Hematology': 'oncology',
    'RadiationOncology': 'radiationOncology',
    'Hospitalists': 'hospitalists',
    'Rheumatology': 'rheumatology',
    'Nephrology': 'nephrology',
    'InfectiousDisease': 'infectiousDisease',
    'Neurosurgical': 'neurosurgical',
    'Podiatry': 'podiatry',
    'PhysicalTherapy/OccupationalTherapy': 'physicalTherapyOccupationalTherapy',
    'Geriatrics': 'geriatrics',
    'UrgentCare': 'urgentCare',
    'SkilledNursing Facility': 'skilledNursingFacility',
    'Dentistry': 'dentistry'
};
