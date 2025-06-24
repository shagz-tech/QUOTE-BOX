const quotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Great things never come from comfort zones.", author: "Anonymous" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Go the extra mile. It's never crowded.", author: "Wayne Dyer" },
  { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
  { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen R. Covey" },
  { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
  { text: "Don’t count the days. Make the days count.", author: "Muhammad Ali" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "Don’t limit your challenges. Challenge your limits.", author: "Jerry Dunn" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { text: "Push harder than yesterday if you want a different tomorrow.", author: "Unknown" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
];

const colors = [
  '#667eea, #764ba2',
  '#ff9966, #ff5e62',
  '#36d1dc, #5b86e5',
  '#f7971e, #ffd200',
  '#c94b4b, #4b134f',
  '#43cea2, #185a9d',
  '#cc2b5e, #753a88',
  '#00c9ff, #92fe9d',
  '#f2709c, #ff9472'
];

function newQuote() {
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(135deg, ${randomColor})`;

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = `"${randomQuote.text}"`;
    authorEl.textContent = `— ${randomQuote.author}`;
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 300);
}

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  const full = `${quote} ${author}`;
  navigator.clipboard.writeText(full);
  alert("✅ Quote copied to clipboard!");
}


