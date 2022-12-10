// 0 - if the server is accepting connections normally, 
// 1 - if the server is rejecting connections (for example during startup) 
// 2 - if there was no response to the connection attempt
// 3 - if no attempt was made (for example due to invalid parameters)
enum CheckConnectionCommandOutput {
    OK = 0,
    REJECTING = 1,
    NO_RESPONSE = 2,
    NO_ATTEMPT = 3
  }