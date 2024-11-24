document.addEventListener("DOMContentLoaded", function() {
    const today = new Date().getDate(); // Obtient le jour actuel
    const calendar = document.querySelector(".calendar");
  
    // Dictionnaire des messages pour chaque jour
    const messages = {
      1: "Bienvenue dans ce calendrier de l'Avent !",
      2: "Complimentez un collègue aujourd'hui.",
      3: "Essaie de parler en rime toute la journée.",
      4: "Echange un objet de ton bureau avec un collègue pour la journée.",
      5: "Écoute une chanson de Noël et chante avec.",
      6: "Partage un souvenir amusant de Noël avec l'équipe.",
      7: "Prépare-toi à recevoir un compliment !",
      8: "Décore ton bureau avec un objet festif.",
      9: "Fais une pause thé et partage une blague.",
      10: "Envoye un message gentil à un collègue.",
      11: "Partage ta recette de Noël préférée.",
      12: "Faites une mini compétition de décorations.",
      13: "Écris un poème de Noël pour tes collègues.",
      14: "Surprise : Prends un moment pour t'arrêter et respirer.",
      15: "Partage un secret de Noël avec ton voisin de bureau.",
      16: "Raconte une histoire de Noël de ton enfance.",
      17: "Faites un compliment sincère à trois personnes.",
      18: "Ouvre une fenêtre virtuelle et laisse entrer la magie !",
      19: "Partage une idée de cadeau original.",
      20: "Mets un accessoire de Noël et fais un défilé.",
      21: "Propose un défi de Noël à tes collègues.",
      22: "Écoute ton chanson de Noël favorite aujourd'hui.",
      23: "Raconte une anecdote sur ton réveillon de Noël.",
      24: "Détends-toi et profite de l'instant présent.",
      25: "Joyeux Noël ! Partage tes vœux avec l'équipe."
    };

    const days = [1, 4, 18, 10, 6, 23, 3, 12, 16, 5, 19, 2, 25, 7, 11, 13, 8, 21, 9, 14, 24, 17, 20, 15, 22]
  
    // Génération des 25 divs du calendrier
    for (let i = 0; i <= days.length-1; i++) {
      const dayi = days[i];
      const day = document.createElement("div");
      day.classList.add("day");
      day.dataset.day = dayi;
  
      // Créer la structure de la carte
      const card = document.createElement("div");
      card.classList.add("card");
  
      const front = document.createElement("div");
      front.classList.add("front");
      front.style.backgroundImage = "url('cadeau.png')"; // Remplace avec l'image de ton choix
      const dayNumber = document.createElement("span");
      dayNumber.classList.add("day-number");
      dayNumber.textContent = dayi;
      front.appendChild(dayNumber);

      card.appendChild(front);
  
      const back = document.createElement("div");
      back.classList.add("back");
      const message = document.createElement("div");
      message.classList.add("message");
      message.textContent = messages[dayi];
      back.appendChild(message);
      card.appendChild(back);
  
      day.appendChild(card);
      calendar.appendChild(day);

      const flippedCards = JSON.parse(localStorage.getItem("flippedCards")) || [];
      if (flippedCards.includes(dayi)) {
        day.classList.add("flipped");
      }
  
      // Gérer le verrouillage des jours
      if (dayi > today) {
        day.classList.add("locked");
      } else {
        day.classList.add("unlocked");
      }
  
      // Ajouter l'événement de clic
      day.addEventListener("click", function() {
        if (dayi <= today) {
          day.classList.toggle("flipped"); // Retourne la carte
          let flippedCards = JSON.parse(localStorage.getItem("flippedCards")) || [];
          if (day.classList.contains("flipped")) {
            flippedCards.push(dayi);
          } else {
            flippedCards = flippedCards.filter(dayId => dayId !== dayi);
          }
          localStorage.setItem("flippedCards", JSON.stringify(flippedCards));
        } else {
          day.classList.add("shake"); // Effet de shake
          setTimeout(() => day.classList.remove("shake"), 500); // Supprime l'effet
        }
      });
    }
  });
  