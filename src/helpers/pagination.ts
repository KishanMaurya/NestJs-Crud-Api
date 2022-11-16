export const getPagination = async(query_params : any)=>{
    const DEFAULT_OFFSET = 0;
    const DEFAULT_LIMIT = 10;
    const MAX_LIMIT = 100;
    console.log("inside ->",query_params.limit, query_params.skip)
    let limit = Math.min(parseInt(query_params.limit || DEFAULT_LIMIT, 10), 100);

    // if a negative or a very high number is given, set it to the default value
    if (limit < 0 || limit > MAX_LIMIT) {
      limit = DEFAULT_LIMIT;
    }

    let skip = parseInt(query_params.skip || DEFAULT_OFFSET, 10);

    // if a negative or a very high number is given, set it to the default value
    if (skip < 0) {
      skip = DEFAULT_OFFSET;
    }
    const sort = parseInt(query_params.sort ? query_params.sort : -1, 10);

    return {
      limit,
      skip,
      sort,
    };
  }

