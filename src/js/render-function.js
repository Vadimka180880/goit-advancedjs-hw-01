export const createGalleryCardsTemplate = picturesArr => {
    return picturesArr.reduce((acc, pictureInfo) => {
        return acc + `
        <li class="gallery_item">
            <a class="gallery_link" href="${pictureInfo.original}">
            <img src="${pictureInfo.preview}" alt="${pictureInfo.description}" width="${pictureInfo.width}" height="${pictureInfo.height}" />
            </a>
        </li>`;
    }, '');
    };