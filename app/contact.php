<?php
// Contact form handler voor The Agency website
// Upload dit bestand naar de public_html folder op Argeweb

if ($_POST && isset($_POST['naam']) && isset($_POST['email']) && isset($_POST['bericht'])) {
    
    // Sanitize input data
    $naam = htmlspecialchars(trim($_POST['naam']));
    $bedrijf = htmlspecialchars(trim($_POST['bedrijf'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email']));
    $telefoon = htmlspecialchars(trim($_POST['telefoon'] ?? ''));
    $onderwerp = htmlspecialchars(trim($_POST['onderwerp'] ?? ''));
    $bericht = htmlspecialchars(trim($_POST['bericht']));
    
    // Validate required fields
    if (empty($naam) || empty($email) || empty($bericht)) {
        echo '<script>alert("Vul alle verplichte velden in."); window.history.back();</script>';
        exit;
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo '<script>alert("Ongeldig email adres."); window.history.back();</script>';
        exit;
    }
    
    // Email settings
    $to = "the@gency.nl";
    $subject = "Contact van website";
    if (!empty($onderwerp)) {
        $subject .= " - " . $onderwerp;
    }
    
    // Compose message
    $message = "Nieuw contactbericht van de website:\n\n";
    $message .= "CONTACTGEGEVENS:\n";
    $message .= "Naam: " . $naam . "\n";
    if (!empty($bedrijf)) {
        $message .= "Bedrijf: " . $bedrijf . "\n";
    }
    $message .= "Email: " . $email . "\n";
    if (!empty($telefoon)) {
        $message .= "Telefoon: " . $telefoon . "\n";
    }
    if (!empty($onderwerp)) {
        $message .= "Onderwerp: " . $onderwerp . "\n";
    }
    $message .= "\nBERICHT:\n";
    $message .= $bericht . "\n\n";
    $message .= "---\n";
    $message .= "Verzonden op: " . date('d-m-Y H:i:s') . "\n";
    $message .= "IP adres: " . $_SERVER['REMOTE_ADDR'] . "\n";
    
    // Email headers
    $headers = "From: noreply@the-agency.nl\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Success - redirect back with success message
        echo '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Bericht verzonden - The Agency</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
        .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; margin-bottom: 20px; }
        p { color: #666; line-height: 1.6; margin-bottom: 20px; }
        .button { display: inline-block; background: #000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .button:hover { background: #333; }
    </style>
</head>
<body>
    <div class="container">
        <h1>✓ Bericht verzonden!</h1>
        <p>Dank je wel <strong>' . $naam . '</strong>, je bericht is succesvol verzonden.</p>
        <p>Wij nemen zo spoedig mogelijk contact met je op via <strong>' . $email . '</strong>.</p>
        <a href="/" class="button">Terug naar website</a>
    </div>
</body>
</html>';
    } else {
        // Error sending email
        echo '<script>alert("Er is een fout opgetreden bij het verzenden. Probeer het opnieuw of neem direct contact op via the@gency.nl"); window.history.back();</script>';
    }
    
} else {
    // No POST data or missing required fields - redirect to contact page
    header("Location: /contact");
    exit;
}
?>