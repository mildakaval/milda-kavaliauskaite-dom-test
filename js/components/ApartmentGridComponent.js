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
        this.htmlElement.className = 'row';

        this.render();
    }
    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-2 col-lg-3 col-xl-4';
        column.appendChild(element);
        return column;
    }

    render = () => {
        const { loading, apartment } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
        } else if(apartment.length > 0){
          this.htmlElement.innerHTML = '';
          const apartmentElements = apartment
          .map(x => new ApartmentCardComponent(x))
          .map(x => x.htmlElement)
          this.htmlElement.append(...apartmentElement)
        } else{
            this.htmlElement.innerHTML = '<h2>Šiuo metu neturime ką pasiūlyti</h2>'
        }
    }
}