<?php
function signup($conn) {
    
    // Retrieve the form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $dateOfBirth = $_POST['dateOfBirth'];
    $address = $_POST['address'];
    $postcode = $_POST['postcode'];
    $password = $_POST['password'];

    // Check if any form fields are missing
    if (empty($fullname) || empty($email) || empty($dateOfBirth) || empty($address) || empty($postcode) || empty($password)) {
        http_response_code(400);
        $response = array('error' => 'Please fill in all the required fields');
        echo json_encode($response);
        return;
    }

    //? Check if the email already exists in the database
    $checkEmailQuery = "SELECT * FROM users WHERE email = '$email'";
    $checkEmailResult = $conn->query($checkEmailQuery);
    if ($checkEmailResult->num_rows > 0) {
        //? Set response status code to 409 Conflict
        http_response_code(409); 
        $response = array('error' => 'Email already exists');
        echo json_encode($response);
        return;
    }

    //? Validate age (must be 18 or older)
    $now = new DateTime();
    $dob = new DateTime($dateOfBirth);
    $age = $dob->diff($now)->y;
    if ($age < 18) {
        http_response_code(400); 
        $response = array('error' => 'You must be 18 years or older to sign up');
        echo json_encode($response);
        return;
    }


    //? Prepare the SQL statement to insert the user data into the database
    $sql = "INSERT INTO users (fullName, email, dateOfBirth, address, postcode, password) 
            VALUES ('$fullname', '$email', '$dateOfBirth', '$address', '$postcode', '$password')";

    //? Execute the SQL statement
if ($conn->query($sql) === true) {
    //? Retrieve the inserted user data
    $userId = $conn->insert_id;
    $getUserQuery = "SELECT * FROM users WHERE id = '$userId'";
    $getUserResult = $conn->query($getUserQuery);

    if ($getUserResult->num_rows > 0) {
        $user = $getUserResult->fetch_assoc();
        //? Return the user data as a JSON response
        http_response_code(200);
        echo json_encode($user);
    } else {
        $response = array('message' => 'User registered successfully, but failed to retrieve user data');
        http_response_code(500);
        echo json_encode($response);
    }
} else {
    $response = array('error' => 'Error registering user');
    http_response_code(500);
    echo json_encode($response);
}
}
?>
