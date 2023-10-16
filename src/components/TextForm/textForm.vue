<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="styleInvalid(chapter)">
            <label for="chapter">Chapter</label>
            <input
                type="text"
                id="chapter"
                v-model.trim="chapter.val"
                @blur="clearValidity(chapter)"
            />
            <p v-if="!chapter.isValid">First name must not be empty</p>
        </div>
        <div class="form-control translate" v-if="query">
             <div v-for="explain in explains" :key="explain"> {{ explain }}</div>
        </div>
        <div class="form-control" :class="styleInvalid(description)" @keyup.enter.prevent="translate">
            <label for="description">Description</label>
            <textarea
                id="description"
                rows="31"
                v-model.trim="description.val"
                @blur="clearValidity(description)"    
            />
            <p v-if="!description.isValid">
                Description name must not be empty
            </p>
        </div>
        <p v-if="!formIsValid" class="errors">
            Please fix the above errors and submit again
        </p>
        <base-button class="submit-btn">Register</base-button>
    </form>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import { jsonp } from 'vue-jsonp';
import { SHA256, enc } from 'crypto-js';
export default {
  components: { BaseButton },
    emits: ['save-data'],
    data() {
        return {
            chapter: {
                val: '',
                isValid: true,
            },
            description: {
                val: '',
                isValid: true,
            },
            query: null,
            explains: [],
            formIsValid: true,
        };
    },
    methods: {
        validateForm() {
            this.formIsValid = true;

            if(this.isEmpty(this.chapter.val)){
                this.chapter.isValid = false;
                this.formIsValid = false;
            }
            if(this.isEmpty(this.description.val)){
                this.description.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();
           
            if(!this.formIsValid) return ;

            const formData = {
                chapter: this.chapter.val,
                desc: this.description.val,
            };
            this.$emit('save-data', formData);
        },
        clearValidity(input) {
            input.isValid = true;
        },
        isEmpty(value) {
            return value === '';
        },
        styleInvalid(value) {
            return { invalid : !value.isValid }
        },
        async translate() {
            let appKey = '6b5e3ab984d0121b';
            let salt = Math.round(Math.random()*10000000000);
            let key = "IqUMJwXkbbY5cVERhgDiodX2EmApSfHU";
            var curtime = Math.round((new Date()).getTime()/1000);
            let ti = this.description?.val.split(' ');
            let currentValue=  ti[ti.length-1];
            let from = "en";
            let to='en';
            console.log(currentValue)
            let str1 = appKey + currentValue + salt + curtime + key;
            let sign = SHA256(str1).toString(enc.Hex);
            let result = await jsonp('https://openapi.youdao.com/api',{
            type: 'post',
          
                q: currentValue,
                appKey: appKey,
                salt: salt,
                from: from,
                to: to,
                sign: sign,
                signType: "v3",
                curtime: curtime,
            
        })
        //   this.meaning = result.trans_result[0].dst;
           this.query = result.query;
           this.explains = result.basic.explains;
        }
    },
    
}
</script>

<style scoped>
.form-control {
    margin: 1.6rem 0;
}

.translate {
    font-size: 2rem;
    color: #d13b3b;
    font-size: 1.8rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 4rem;
}

input[type='checkbox'] + label {
    display: inline;
    margin-left: 1rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 0.2em 0.4em;
    font: inherit;
    padding: 0.2em 0.4em;
    border-radius: 0.8rem;
}

input:focus,
textarea:focus {
   font-size: 3rem;
}

input[type="checkbox"] {
    display: inline-block;
    width: auto;
    border: none;
    transform: scale(1.2);
}

h3 {
    margin: 0.5rem 0 ;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.invalid label {
    color: #d13b3b;
}

.invalid input, 
.invalid textarea {
    border-color: #d13b3b;
}

.errors {
    color: #d13b3b;
    font-weight: bold;
}

.invalid input:focus,
.invalid textarea:focus {
    background: #fce2e2;
}

.checkboxes > div {
    margin: 0.5rem 0;
}

.checkboxes {
    margin-bottom: 2.4rem;
}

p {
    margin-top: 0.2em;
    font-size: 1.4rem;
}

.submit-btn {
    margin-top: 2rem;
}


</style>