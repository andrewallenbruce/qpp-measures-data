import _ from 'lodash';

const path = 'measureSpecification.default';

export function mergePiLinks (measures, piLinks) {
  piLinks.forEach((piLink) => {
    const measure = measures.find(measure => measure.measureId === piLink.measureId);
    if (measure) {
      if (!measure.measureSpecification) measure.measureSpecification = {};
      _.set(measure, path, piLink.link);
    }
  });
};
