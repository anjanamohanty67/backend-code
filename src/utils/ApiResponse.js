class ApiResponse {
    constructor( statusCode , data , message = "success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
        
    }
}
export {ApiResponse}

//different responses we get from server-code

//1. informational responses (100 - 190)
//2. successful responses (200 - 299)
//3. redirection messages (300 - 399)
//4. client error responses (400 - 499)
//5. server error responses (500 - 599)