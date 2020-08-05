const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase.splite('/')[1] || '/';

export default getHash;