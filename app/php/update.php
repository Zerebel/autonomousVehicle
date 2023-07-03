<?php
function updateUserData($conn) {
    // Retrieve the user ID and updated data from the request
    $userId = $_POST['userId'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $dateOfBirth = $_POST['dateOfBirth'];
    $address = $_POST['address'];
    $postcode = $_POST['postcode'];

    // Validate age (must be 18 or older)
    $now = new DateTime();
    $dob = new DateTime($dateOfBirth);
    $age = $dob->diff($now)->y;
    if ($age < 18) {
        http_response_code(400); 
        $response = array('error' => 'You must be 18 years or older');
        echo json_encode($response);
        return;
    }

    // Prepare the SQL statement to update the user data
    $sql = "UPDATE users SET fullName = '$fullname', email = '$email', dateOfBirth = '$dateOfBirth',
            address = '$address', postcode = '$postcode' WHERE id = '$userId'";

    // Execute the SQL statement
    if ($conn->query($sql) === true) {
        // Retrieve the updated user data
        $getUserQuery = "SELECT * FROM users WHERE id = '$userId'";
        $getUserResult = $conn->query($getUserQuery);

        if ($getUserResult->num_rows > 0) {
            $user = $getUserResult->fetch_assoc();
            // Return the user data as a JSON response
            http_response_code(200);
            echo json_encode($user);
        } else {
            $response = array('message' => 'Data updated successfully, but failed to retrieve user data');
            http_response_code(500);
            echo json_encode($response);
        }
    } else {
        $response = array('error' => 'Error updating user data');
        http_response_code(500);
        echo json_encode($response);
    }
}

?>
