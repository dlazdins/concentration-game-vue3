import { ref, reactive, computed, nextTick } from 'vue';

export function useGameLogic(initialCards) {
    const cards = reactive({ items: [] });
    const flippedCards = ref([]);
    const moves = ref(0);
    const gameOver = computed(() => cards.items.every(card => card.matched));

    // Fisher-Yates shuffle function
    const shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const shuffleCards = () => {
      let duplicatedCards = [...initialCards.map(card => ({ ...card })), ...initialCards.map(card => ({ ...card }))]
        duplicatedCards.forEach((card, index) => {
            card.id = `${card.content}-${index}`;
        });
        shuffle(duplicatedCards);
        cards.items = duplicatedCards;
    };

    const flipCard = async index => {
        const card = cards.items[index];
        if (card.flipped || flippedCards.value.length === 2) {
            return;
        }

        card.flipped = true;
        flippedCards.value.push(card);

        if (flippedCards.value.length === 2) {
            moves.value++;
            await nextTick();
            checkForMatch();
        }
    };

    const checkForMatch = () => {
        const [firstCard, secondCard] = flippedCards.value;

        if (firstCard.content === secondCard.content) {
            setTimeout(() => {
                firstCard.matched = true;
                secondCard.matched = true;
                resetFlippedCards();
            }, 1000);
        } else {
            setTimeout(() => {
                firstCard.flipped = false;
                secondCard.flipped = false;
                resetFlippedCards();
            }, 1000);
        }
    };

    const resetFlippedCards = () => {
        flippedCards.value = [];
    };

    const startGame = () => {
        moves.value = 0;
        resetFlippedCards();
        shuffleCards();
    };

    return { cards, flippedCards, moves, gameOver, startGame, flipCard };
}
