class Bingo {
  constructor() {
    this.cards = []
    this.numbers = []

    this.numOfColumns = 5
    this.min = 1
    this.max = 75
  }

  randomNumber() {
    const number = Math.floor(Math.random() * this.max + this.min)

    if(this.numbers.includes(number)) return this.randomNumber()

    return number
  }

  generateNumber() {
    if(this.numbers.length >= this.max) throw new Error('Maximum of numbers generated')

    const number = this.randomNumber()
    this.numbers.push(number)

    return { number, history: this.numbers }
  }

  generateArrColumns () {
    const grid = []
    for (let column = 0; column < this.numOfColumns; column++)
      grid.push(
        Array.from(
          { length: 15 },
          (_, i) => i + (1 + (column * 15))
        )
      )

    return grid
  }

  generateCard() {
    const card = {
      grid: this.generateArrColumns().map((col, index) => {
        const column = col.sort(() => Math.random() - 0.5).slice(0, this.numOfColumns)
        if(index === 2) column.splice(2, 1, 'FREE')
        return column
      }),
      cardId: this.cards.length + 1
    }

    this.cards.push(card)

    return { card }
  }

  validateCard(card) {
    const numbersOfCards = card.grid.flat().filter(Number)
    const isWinner = numbersOfCards.every(number => this.numbers.includes(number))

    return {
      message: isWinner ? 'Player is the winner' : 'Player is not the winner',
      isWinner,
      need   : isWinner ? [] :  numbersOfCards.filter(number => !this.numbers.includes(number))
    }
  }

  validateCardById(cardId) {
    const card = this.cards.find(card => card.cardId === Number(cardId))
    if(!card) throw new Error('Card not found')

    return this.validateCard(card)
  }

  validateCards() {
    return {
      cards: this.cards.map(card => this.validateCard(card))
    }
  }
}

export default Bingo
