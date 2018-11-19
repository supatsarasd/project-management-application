export default {
  
  MAX_ATTACHMENT_SIZE: 5000000,
    
  s3: {
    REGION: "eu-west-2",
    BUCKET: "project-manage-app"
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://msytnt0x20.execute-api.eu-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_qToYjOGIt",
    APP_CLIENT_ID: "42ad3laupiais69tmmlc0j1e3m",
    IDENTITY_POOL_ID: "eu-west-2:81f4928b-c544-4802-9fd7-db9932006667"
  }

};
