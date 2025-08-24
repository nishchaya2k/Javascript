const list = Array.from({ length: '1000' }, (_, index) => index + 1)

const virtualizeList = (list, height, width, itemHeight) => {
    let initiallState = [0, Math.floor(height / itemHeight)]
    const visibleList = list.slice(0, initiallState + 1);

    const container = document.createElement('div');

    

}


document.addEventListener("DOMContentLoaded", virtualizeList())