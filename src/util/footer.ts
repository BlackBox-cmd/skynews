const quotes = [
    'Made by Mr_Freak_cmd',
    'Never miss another pumpkin contest',
    'Made with the tears of Crafty Imposters completionists',
    'This bot cost me 0 booster cookies to make',
    'It was not made by shohan0593 aka bodda',
    'ill consider a jerry update',
    'If you are seeing this, you are a true jacob contest fan',
    'I hope you enjoy the bot as much as I enjoyed making it',
    'If you have any suggestions or feedback, please let me know',
];

export const getRandomFooter = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
