// Réservation
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://vtkzzbfmzibalozncjhq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0a3p6YmZtemliYWxvem5jamhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODE0MTMsImV4cCI6MjA2ODI1NzQxM30.PiCBkQ9Vh8_sANmvokJVjaqDi1DLm8L6Mh_fsm2nxVg';

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // empêche le rechargement

    const now = new Date();
    const timestamp = now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0') +
        String(now.getHours()).padStart(2, '0') +
        String(now.getMinutes()).padStart(2, '0') +
        String(now.getSeconds()).padStart(2, '0');

    const random1 = Math.floor(Math.random() * 90) + 10;
    const random2 = Math.floor(Math.random() * 90) + 10;

    const table_id = `${timestamp}-${random1}${random2}`;
    const couverts = document.getElementById('nombre-couvert').value;
    const date = document.getElementById('date-reservation').value;
    const heure = document.getElementById('heure-reservation').value;
    const nom = document.getElementById('nom').value;

    document.getElementById('table_id').value = table_id;

    const { data, error } = await supabase
        .from('reservations')
        .insert([{ couverts, date, heure, nom, table_id }]);

    if (error) {
        alert("Erreur lors de la réservation : " + error.message);
    } else {
        window.location.href = "merci_2.html";
    }
});