class ApartmentGridComponent {
    constructor(){
        this.state = {
            loading: false,
            apartment: []
        }
        this.init();
    }
    fetchApartment = () => API.fetchApartment(this.saveApartment);
    saveApartment = (apartment) => {
        this.state.apartment = apartment;
        this.state.loading = false;

        this.render();
    }

    init = () => {
        this.state.loading = true;
        this.fetchApartment();
        this.htmlElement = document.createElement('div');

        this.render();
    }

    render = () => {
        const { loading, cars } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = 'Siunčiama.....';
        } else {
            this.htmlElement.innerHTML = 'Parsiųsta!';
        }
    }
}