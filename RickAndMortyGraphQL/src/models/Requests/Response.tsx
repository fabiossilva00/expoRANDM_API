class ResponseHandler<S, E> {
    success: S | null
    failure: E | null
    constructor(success?: any, failure?: any) {
        this.success = success
        this.failure = failure
    }
}

export default ResponseHandler