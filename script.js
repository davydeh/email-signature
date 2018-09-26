const platforms = {
    pepper: {
        color: '#FF7900',
        job_ad: '<img width="284" height="40" style="vertical-align: middle; border: none; width: 284px; max-width: 284px !important; height: 40px; max-height: 40px !important;" src="https://assets.pepper.com/assets/images/email-signature/job-ads/pepper.png" alt="We\'re hiring! Join our team"/>',
        logo: '<img width="221" height="46" style="width: 221px; max-width: 221px !important; height: 46px; max-height: 46px !important; vertical-align: middle; border: none;" src="https://assets.pepper.com/assets/images/email-signature/logos/pepper.png" alt="Pepper"/>',
        name: 'Pepper Media Holding GmbH',
        address: 'Torstraße 164, Aufgang A | 10115 Berlin, Germany',
        community: '',
        ceo: 'Geschäftsführer: Fabian Spielberger, Registriernummer: HRB 28003 P, Ust-IdNr.: DE304746538',
    },
    chollometro: {
        color: '#FF7900',
        job_ad: '<img width="284" height="40" style="vertical-align: middle; border: none; width: 284px; max-width: 284px !important; height: 40px; max-height: 40px !important;" src="https://assets.pepper.com/assets/images/email-signature/job-ads/pepper.png" alt="We\'re hiring! Join our team"/>',
        logo: '<img width="241" height="46" style="width: 241px; max-width: 241px !important; height: 46px; max-height: 46px !important; vertical-align: middle; border: none;" src="https://assets.pepper.com/assets/images/email-signature/logos/chollometro.png" alt="Chollometro"/>',
        name: 'Digital Link Marketing, S.L.',
        address: 'C/ Bastia 18 - Montequinto (Dos Hermanas) | Sevilla 41089, Spain',
        community: 'Parte de la comunidad internacional <img width="125" height="26" style="vertical-align: middle; border: none; width: 125px; max-width: 125px !important; height: 26px; max-height: 26px !important; margin-bottom: 7px; margin-left: 3px; margin-right: 3px;" src="https://assets.pepper.com/assets/images/email-signature/logos/pepper.png" alt="Pepper"/>',
        ceo: 'CEO: Adrián del Arco, Manuel Zabala, Miguel Nogales, VAT No.: ESB90266537',
    },
    dealabs: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    hotukdeals: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    mydealz: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    pelando: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    pepper_ru: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    pepper_nl: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    pepper_pl: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    preisjaeger: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
    promodescuentos: {
        color: '#FF7900',
        job_ad: '',
        logo: '',
        name: '',
        address: '',
        community: '',
        ceo: '',
    },
};

const userData = {
    name: '',
    role: '',
    email: '',
    phone: '',
    work_phone: '',
};

const appData = {
    editMode: true,
    platform: '',
    hasPersonalPhone: false,
    hasWorkPhone: false,
    hidePhone: false,
    animateForm: false,
    platformData: {},
    hasBeenSaved: false,
};

new Vue({
    el: '#main',
    data: () => Object.assign({}, userData, appData),
    methods: {
        generateSignature () {
            this.editMode = false;
            this.platformData = Object.assign({}, platforms[this.platform]);
            this.hasBeenSaved = true;
        }
    },
    computed: {
        mailto () {
            return `mailto:${this.email}`;
        }
    }
});
