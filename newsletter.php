<?php
// Vérifie si le formulaire a été soumis via la méthode POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- CONFIGURATION ---
    // Adresse email de réception
    $to = "alain@as2tel.fr";
    
    // --- RÉCUPÉRATION DES DONNÉES ---
    
    // Email (champ commun et obligatoire)
    // On nettoie l'email pour éviter les caractères interdits
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    // Détermination du sujet de l'email
    // Si le champ caché "subject" existe (formulaire complet), on l'utilise (ex: "page-propos").
    // Sinon (formulaire newsletter du footer), on met "newsletter" par défaut.
    $subject = isset($_POST['subject']) ? strip_tags($_POST['subject']) : "newsletter";
    
    // --- CONSTRUCTION DU MESSAGE ---
    $message = "Nouveau message depuis le site As2Tel.\n";
    $message .= "Motif : " . $subject . "\n\n";
    $message .= "--- Détails ---\n";
    
    // Ajout dynamique des champs s'ils existent (cas du formulaire complet)
    if (!empty($_POST['nom'])) {
        $message .= "Nom : " . strip_tags($_POST['nom']) . "\n";
    }
    if (!empty($_POST['societe'])) {
        $message .= "Cabinet / Société : " . strip_tags($_POST['societe']) . "\n";
    }
    
    $message .= "Email : " . $email . "\n";
    
    if (!empty($_POST['telephone'])) {
        $message .= "Téléphone : " . strip_tags($_POST['telephone']) . "\n";
    }
    if (!empty($_POST['message'])) {
        $message .= "\nMessage :\n" . strip_tags($_POST['message']) . "\n";
    }
    
    $message .= "\nDate : " . date('d/m/Y H:i:s');

    // --- EN-TÊTES DE L'EMAIL ---
    // "From" doit idéalement être une adresse du domaine pour éviter les spams (ex: no-reply@as2tel.fr)
    // "Reply-To" permet de répondre directement au client en cliquant sur "Répondre"
    $headers = "From: no-reply@as2tel.fr\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // --- ENVOI ET VALIDATION ---
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Envoi de l'email via la fonction standard mail() (compatible Namecheap)
        if(mail($to, $subject, $message, $headers)) {
            // SUCCÈS : Retour à la page précédente avec une alerte JavaScript
            echo "<script>alert('Votre demande a bien été envoyée.'); window.history.back();</script>";
        } else {
            // ERREUR SERVEUR : L'envoi a échoué
            echo "<script>alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer plus tard.'); window.history.back();</script>";
        }
    } else {
        // ERREUR UTILISATEUR : Email invalide
        echo "<script>alert('Adresse email invalide.'); window.history.back();</script>";
    }
} else {
    // SÉCURITÉ : Si on essaie d'accéder au fichier directement sans soumettre le formulaire, on redirige vers l'accueil
    header("Location: index.html");
    exit();
}
?>