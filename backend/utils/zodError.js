export default function zodErrorFormatter(error) {
  /* [
    {
    
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
        path: [ 'email' ],
        message: 'Required'
      },
      {
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
        path: [ 'userName' ],
        message: 'Required'
      },
    
      {
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
       path: [ 'password' ],
        message: 'Required'
      }
    ] */

  let response = [];

  error.forEach((element) => {
    response.push(element.path[0] + " " + element.message);
  });

  return response;
}
