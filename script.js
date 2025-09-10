// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', () => {
    // Check if required libraries are loaded
    if (typeof Chess === 'undefined') {
        console.error('Chess.js kütüphanesi yüklenemedi!');
        return;
    }
    
    if (typeof Chessboard === 'undefined') {
        console.error('Chessboard kütüphanesi yüklenemedi!');
        return;
    }
    
    let board = null; // Initialize the chessboard
    const game = new Chess(); // Create new Chess.js game instance
    const moveHistory = document.getElementById('move-history'); // Get move history container
    let moveCount = 1; // Initialize the move count
    let userColor = 'w'; // Initialize the user's color as white
    let gameMode = 'human-vs-pc'; // Current game mode
    let currentPlayer = 'w'; // Current player (w for white, b for black)

    // Function to make a random move for the computer
    const makeRandomMove = () => {
        const possibleMoves = game.moves();

        if (game.game_over()) {
            alert("ŞAH MAT!");
        } else {
            const randomIdx = Math.floor(Math.random() * possibleMoves.length);
            const move = possibleMoves[randomIdx];
            game.move(move);
            board.position(game.fen());
            recordMove(move, moveCount); // Record and display the move with move count
            moveCount++; // Increament the move count
        }
    };

    // Function to record and display a move in the move history
    const recordMove = (move, count) => {
        const player = count % 2 === 1 ? 'Beyaz' : 'Siyah';
        moveHistory.innerHTML += `<strong>${player}:</strong> ${move}<br>`;
        moveHistory.scrollTop = moveHistory.scrollHeight; // Auto-scroll to the latest move
    };

    // Function to handle the start of a drag position
    const onDragStart = (source, piece) => {
        if (game.game_over()) return false;
        
        if (gameMode === 'human-vs-pc') {
            // In human vs PC mode, only allow user to drag their pieces
            return piece.search(userColor) === 0;
        } else if (gameMode === 'human-vs-human') {
            // In human vs human mode, only allow current player to drag their pieces
            return piece.search(currentPlayer) === 0;
        }
        
        return false;
    };

    // Function to handle a piece drop on the board
    const onDrop = (source, target) => {
        const move = game.move({
            from: source,
            to: target,
            promotion: 'q',
        });

        if (move === null) return 'snapback';

        recordMove(move.san, moveCount); // Record and display the move with move count
        moveCount++;
        
        if (gameMode === 'human-vs-pc') {
            // In human vs PC mode, computer makes a move after user
            window.setTimeout(makeRandomMove, 250);
        } else if (gameMode === 'human-vs-human') {
            // In human vs human mode, switch players and flip board with delay
            currentPlayer = currentPlayer === 'w' ? 'b' : 'w';
            setTimeout(() => {
                board.flip();
            }, 1000); // 1 second delay for flip animation
        }
    };

    // Function to handle the end of a piece snap animation
    const onSnapEnd = () => {
        board.position(game.fen());
    };

    // Configuration options for the chessboard
    const boardConfig = {
        showNotation: true,
        draggable: true,
        position: 'start',
        onDragStart,
        onDrop,
        onSnapEnd,
        moveSpeed: 'fast',
        snapBackSpeed: 500,
        snapSpeed: 100,
    };

    // Initialize the chessboard
    try {
        board = Chessboard('board', boardConfig);
        if (!board) {
            console.error('Chessboard başlatılamadı!');
            return;
        }
        console.log('Chessboard başarıyla başlatıldı!');
    } catch (error) {
        console.error('Chessboard başlatma hatası:', error);
        return;
    }

    // Event listener for the "Play Again" button
    document.querySelector('.play-again').addEventListener('click', () => {
        game.reset();
        board.start();
        moveHistory.innerHTML = '';
        moveCount = 1;
        currentPlayer = 'w';
        
        if (gameMode === 'human-vs-pc') {
            userColor = 'w';
        }
    });

    // Event listener for the "Set Position" button
    document.querySelector('.set-pos').addEventListener('click', () => {
        const fen = prompt("İstenilen konum için FEN gösterimini girin!");
        if (fen !== null) {
            if (game.load(fen)) {
                board.position(fen);
                moveHistory.innerHTML = '';
                moveCount = 1;
                currentPlayer = 'w';
                
                if (gameMode === 'human-vs-pc') {
                    userColor = 'w';
                }
            } else {
                alert("Geçersiz FEN gösterimi. Lütfen tekrar deneyin.");
            }
        }
    });


    // Game mode switching functionality
    const switchGameMode = (mode) => {
        gameMode = mode;
        
        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        // Reset game state
        game.reset();
        board.start();
        moveHistory.innerHTML = '';
        moveCount = 1;
        currentPlayer = 'w';
        
        if (mode === 'human-vs-pc') {
            userColor = 'w';
        }
    };

    // Event listeners for game mode buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.getAttribute('data-mode');
            switchGameMode(mode);
        });
    });

});



// CODED AND DESIGNED BY SPEXRON ;)