<template>
    <v-app id="inspire">
        <v-main>
            <v-img :aspect-ratio="2" src="@/assets/Presentation6.png" cover>
                <div>
                    <v-container fluid id="front-container">
                        <navigation :color="color" :flat="flat" />
                        <div class="container">
                            <!-- ... -->
                            <form @submit.prevent="sendEmail" @verify="onVerify">
                                <label>Имя</label>
                                <input type="text" v-model="name" name="name" placeholder="Ваше имя" required>
                                <label>Email</label>
                                <input type="email" v-model="email" name="email" placeholder="Ваш Email" required>
                                <label>Сообщение</label>
                                <textarea name="message" v-model="message" cols="30" rows="5"
                                    placeholder="Ваше сообщение" required></textarea>

                                <div class="g-recaptcha" id="example1"
                                    data-sitekey="6Ldv4iYqAAAAAH9tyNadFKfFJ0LINlwbwVVpgKBp" data-callback="onVerify"
                                    @verify="onVerify">

                                </div>
                                <input type="submit" value="Отправить">
                                <!--button type="submit" class="btn btn-primary">Отправить</button-->
                                <br>

                            </form>
                        </div>
                    </v-container>
                </div>
            </v-img>
        </v-main>
        <foote />
    </v-app>
</template>

<script setup>
import navigation from "@/components/Navigation";
import foote from "@/components/Footer";
import emailjs from '@emailjs/browser';

import {
    ref
} from 'vue'
const drawer = ref(null)
const dialog = ref(false)


</script>





<script>

export default {

    components: {
        navigation,
        foote,
    },
    data: () => ({
        fab: null,
        color: "",
        flat: null,
        name: '',
        email: '',
        message: '',
        sitekey: '6Ldv4iYqAAAAAH9tyNadFKfFJ0LINlwbwVVpgKBp',
        recaptchaResponse: '',
    }), mounted() {
        window.onVerify = this.onVerify.bind(this);
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
        document.head.appendChild(recaptchaScript)
    },

    methods: {
        sendEmail(e) {

            if (!this.recaptchaResponse) {
                alert('Please verify you are not a robot!');
                return;
            }
            try {
                emailjs.sendForm('service_ta9jeus', 'template_zg20v9a', e.target, 'W3OjAf-ADeAiW3qe_', {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    recaptchaResponse: this.recaptchaResponse,
                })
            } catch (err) {
                if (err instanceof ReferenceError) {
                    alert("JSON Error: " + err.message);
                } else {
                    throw err; // rethrow
                }
            }
            ;
            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
            this.recaptchaResponse = ''
        },
        onVerify(response) {
            this.recaptchaResponse = response;
        },
    },
    verifyCallback(response) {
        alert(response);
    },
    onloadCallback() {
        widgetId1 = grecaptcha.render('example1', {
            'sitekey': '6Ldv4iYqAAAAAH9tyNadFKfFJ0LINlwbwVVpgKBp',
            'theme': 'light',
            'callback': this.verifyCallback,
        });
    },
}





</script>

<style scoped>
* {
    box-sizing: border-box;
}

label {
    float: left;
}

input[type=text],
[type=email],
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #b8c7b9;
}

.container {
    display: block;
    margin: auto;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    width: 50%;
}
</style>
