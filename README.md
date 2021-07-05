# BINGO KATA

## Installation

1. Clone the repo
    ```sh
    git clone https://github.com/grovertb/bingokata
    ```

2. Install NPM packages
    ```sh
    yarn
    ```
    > or
    ```
    npm i
    ```

## Development mode
  - Running project
    ```
      yarn dev
    ```

## Production mode
1. Build project
    ```sh
    yarn build
    ```
2. Start project
    ```sh
    yarn start
    ```

## Endpoints

1. Generate Card [GET] [/api/bingo/generate/card]
    + Response 200 (application/json) 
        ```JSON
        {
          "data": {
              "card": {
                  "grid": [
                      [
                          6,
                          12,
                          9,
                          3,
                          13
                      ],
                      [
                          23,
                          16,
                          21,
                          25,
                          24
                      ],
                      [
                          33,
                          42,
                          "FREE",
                          45,
                          34
                      ],
                      [
                          46,
                          59,
                          47,
                          56,
                          48
                      ],
                      [
                          61,
                          62,
                          67,
                          68,
                          63
                      ]
                  ],
                  "cardId": 1
              }
          },
          "success": true
        }
        ````

2. Generate Number [GET] [/api/bingo/generate/number]
    + Response 200 (application/json) 
        ```JSON
        {
          "data": {
              "number": 36,
              "history": [
                  36
              ]
          },
          "success": true
        }
        ```
    + Response 500 (application/json)
      ```JSON
      // is max generate number
      {
        "err": "Maximum of numbers generated",
        "success": false
      }
      ```

3. Validate card by cardId [GET] [/api/bingo/validate/card/:cardId]
    + Response 200 (application/json) 
        ```JSON
        {
          "data": {
              "message": "Player is not the winner",
              "isWinner": false,
              "need": [
                  14,
                  15,
                  5,
                  7,
                  2,
                  18,
                  29,
                  22,
                  17,
                  25,
                  32,
                  33,
                  40,
                  56,
                  51,
                  53,
                  59,
                  49,
                  75,
                  63,
                  62,
                  70,
                  64
              ]
          },
          "success": true
        }

        // winner
        {
          "data": {
            "message": "Player is the winner",
            "isWinner": true,
            "need": []
          },
          "success": true
        }
        ```
    + Response 500 (application/json)
      ```JSON
      // is cardId not exists
      {
        "err": "Card not found",
        "success": false
      }
      ```

4. Validate all cards [GET] [/api/bingo/validate/cards]
    + Response 200 (application/json) 
      ```JSON
      {
        "data": {
            "cards": [
                {
                    "message": "Player is not the winner",
                    "isWinner": false,
                    "need": [
                        14,
                        15,
                        5,
                        7,
                        2,
                        18,
                        29,
                        22,
                        17,
                        25,
                        32,
                        33,
                        40,
                        56,
                        51,
                        53,
                        59,
                        49,
                        75,
                        63,
                        62,
                        70,
                        64
                    ]
                },
                {
                    "message": "Player is the winner",
                    "isWinner": true,
                    "need": []
                },
                {
                    "message": "Player is not the winner",
                    "isWinner": false,
                    "need": [
                        56,
                        51,
                        53
                    ]
                },
            ]
        },
        "success": true
      }
      ```
5. After complete the game or to restart the game [GET] [/api/bingo/init]
    + Response 200 (application/json) 
      ```JSON
      {
        "success": true,
        "message": "Bingo Started"
      }
      ```