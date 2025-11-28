<?php
// Active l'affichage des erreurs pour le débogage
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- 1. CONFIGURATION ---
    $to = "alain@as2tel.fr"; // Votre email de réception
    
    // --- 2. DONNÉES ---
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    // Sujet du mail
    if (isset($_POST['subject'])) {
        $subject = "Contact Site : " . strip_tags($_POST['subject']);
    } else {
        $subject = "Nouveau message depuis le site";
    }
    
    // --- 3. DÉTECTION DU DOMAINE (Même logique que le test qui a réussi) ---
    $domain = $_SERVER['SERVER_NAME'];
    $domain = str_replace("www.", "", $domain);
    
    // Sécurité si le domaine n'est pas détecté
    if (empty($domain) || $domain == 'localhost') {
        $domain = 'as2tel.site';
    }

    $from_email = "no-reply@" . $domain;
    
    // --- 4. MESSAGE ---
    $message = "Nouveau message reçu depuis " . $domain . ".\n\n";
    $message .= "--- Informations ---\n";
    
    if (!empty($_POST['nom'])) {
        $message .= "Nom : " . strip_tags($_POST['nom']) . "\n";
    }
    if (!empty($_POST['societe'])) {
        $message .= "Société : " . strip_tags($_POST['societe']) . "\n";
    }
    
    $message .= "Email client : " . $email . "\n";
    
    if (!empty($_POST['telephone'])) {
        $message .= "Téléphone : " . strip_tags($_POST['telephone']) . "\n";
    }

    // Spécifique à la page Tarifs
    if (!empty($_POST['plan'])) {
        $message .= "Forfait choisi : " . strip_tags($_POST['plan']) . "\n";
    }

    if (!empty($_POST['message'])) {
        $message .= "\n--- Message du client ---\n" . strip_tags($_POST['message']) . "\n";
    }
    
    $message .= "\nDate : " . date('d/m/Y H:i:s');

    // --- 5. EN-TÊTES ---
    $headers = "From: Site Web <" . $from_email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // --- 6. ENVOI ---
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
        if(mail($to, $subject, $message, $headers)) {
            // SUCCÈS : Retour à la page précédente
            echo "<script>
                alert('Message envoyé avec succès ! Nous vous recontacterons rapidement.'); 
                window.history.back();
            </script>";
        } else {
            // ÉCHEC TECHNIQUE
            echo "<script>
                alert('Erreur technique lors de l\'envoi.'); 
                window.history.back();
            </script>";
        }
    } else {
        echo "<script>alert('Adresse email invalide.'); window.history.back();</script>";
    }
} else {
    // Redirection si accès direct
    header("Location: index.html");
    exit();
}
?>
