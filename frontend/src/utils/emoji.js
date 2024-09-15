export const funEmojis = [
    "😀",  // Grinning Face
    "😂",  // Face with Tears of Joy
    "😍",  // Smiling Face with Heart-Eyes
    "😎",  // Smiling Face with Sunglasses
    "🤩",  // Star-Struck
    "😜",  // Winking Face with Tongue
    "🥳",  // Partying Face
    "😆",  // Grinning Squinting Face
    "🤔",  // Thinking Face
    "😇",  // Smiling Face with Halo
    "😋",  // Face Savoring Food
    "😏",  // Smirking Face
    "🙃",  // Upside-Down Face
    "🤗",  // Hugging Face
    "😅",  // Grinning Face with Sweat
    "🤤",  // Drooling Face
    "💪",  // Flexed Biceps
    "👌",  // OK Hand
    "👏",  // Clapping Hands
    "🤞",  // Fingers Crossed
    "🎉",  // Party Popper
    "💥",  // Collision
    "💯",  // 100
    "🔥",  // Fire
    "✨",  // Sparkles
    "🌟",  // Glowing Star
    "💫",  // Dizzy
    "🌈",  // Rainbow
    "☀️",  // Sun
    "🌙",  // Crescent Moon
    "⚡",  // High Voltage
    "🍕",  // Pizza
    "🍔",  // Hamburger
    "🍣",  // Sushi
    "🎈",  // Balloon
    "🎁",  // Wrapped Gift
    "🎂",  // Birthday Cake
    "🥂",  // Clinking Glasses
    "🍻",  // Beer Mugs
    "🎶",  // Musical Notes
    "💎",  // Gem Stone
  ];
export const getRandomEmoji=()=>{
    return funEmojis[Math.floor(Math.random()*funEmojis.length)];
}  