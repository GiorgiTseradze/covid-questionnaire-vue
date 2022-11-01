import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { en } from '@vee-validate/i18n/dist/locale/en.json'
import { ka } from '@vee-validate/i18n/dist/locale/ka.json'


configure({
    generateMessage: localize({
        en: {
            ...en,
            messages: {
                required: "ამ ველის შევსება აუცილებელია"
            },
            names: {
                first_name: 'სახელი'
            }
        }
    })

})