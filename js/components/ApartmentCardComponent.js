class ApartmentCardComponent{
    constructor(props){
        this.props = props;

        this.init();
    }

    init = () => {
        const{ type, owner: {fullname, email, phone}, roomcount, squares, address: {city, country, street, number}, price: {amount, currency}, imgSrc } = this.props;
        this.htmlElement = dovument.createElement('article');
        this.htmlElement.className = 'card p-3';
        this.htmlElement.innerHTML = `<h2 class="h5>Kortele</h2>`;
    }
}