<?php
function login($conn) {
    // Retrieve the email and password from the request
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare the SQL statement to check if email and password match
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";

    // Execute the SQL statement
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Fetch the user data
        $user = $result->fetch_assoc();

        // Return the user data as a JSON response
        echo json_encode($user);
    } else {
      http_response_code(401);

        $response = array('status' => 401,'error' => 'Invalid email or password');
        echo json_encode($response);
    }
}
