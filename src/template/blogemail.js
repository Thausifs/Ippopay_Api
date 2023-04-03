export const blogemail = async (name, email, message) => {
  const data = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mail Template</title>
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
      crossorigin="anonymous"
    />
    <link href="css/style.css" rel="stylesheet" />
  </head>

  <body>
    <div class="card mx-auto my-5" style="width: 20rem">
      <div class="mx-auto">
        <img
          src="https://raw.githubusercontent.com/Primates-Development-Pvt/EV-Server/master/logo.jpeg?token=GHSAT0AAAAAAB65ZSKKSNDONPZCYZ7K6KE4ZBK4D4Q"
          style="width: 130px; height: 100px"
          alt=""
        />
      </div>
      <div class="heading mx-auto">
        <h4 class="my-2 text-success"></h4>
      </div>
      <ul class="list my-2">
        <li class="list-group-item my-3 text-success d-flex flex-row">
          <div>
            <i class="bx bx-user-circle fs-2"></i>
          </div>
          <div>
            <p class="mt-1">${name}</p>
          </div>
        </li>
        <li class="list-group-item my-3 text-success d-flex flex-row">
          <div>
            <i class="bx bxl-gmail fs-2"></i>
          </div>
          <div>
            <p class="mt-1">${email}</p>
          </div>
        </li>
        <li class="list-group-item my-3 text-success">
          <div class="mx-auto">
            <div class="d-flex flex-row">
              <i class="bx bxs-envelope fs-2"></i>
            </div>
          </div>
          <div>
            <p class="mt-1">
             ${message}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </body>
</html>
`;
  return data;
};
