// Réservation
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://vtkzzbfmzibalozncjhq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0a3p6YmZtemliYWxvem5jamhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODE0MTMsImV4cCI6MjA2ODI1NzQxM30.PiCBkQ9Vh8_sANmvokJVjaqDi1DLm8L6Mh_fsm2nxVg';

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
    const uniqueId = Date.now().toString();
    document.getElementById('id').value = uniqueId;

    document.getElementById('reservation-form').addEventListener('submit', async (e) => {
        e.preventDefault(); // empêche le rechargement

        const id = document.getElementById('id').value;
        const couverts = document.getElementById('nombre-couvert').value;
        const date = document.getElementById('date-reservation').value;
        const heure = document.getElementById('heure-reservation').value;
        const nom = document.getElementById('nom').value;

        const { data, error } = await supabase
            .from('reservations')
            .insert([{ id, couverts, date, heure, nom }]);

        if (error) {
            alert("Erreur lors de la réservation : " + error.message);
        } else {
            window.location.href = "merci_2.html";
        }
    });
});