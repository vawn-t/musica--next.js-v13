import * as qs from 'qs';

const queryString = (obj: Object) => qs.stringify(obj, { encode: false });

export default queryString;
