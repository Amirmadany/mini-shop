<template>

    <div class="product__expiration" v-show="timer != null">
                
        <div class="count-down__timer">
            
            <span> {{ leftTimeDetail.days }} </span>
            <span class="count-down__timer--sperator">:</span>

            <span>{{ leftTimeDetail.hours }}</span>
            <span class="count-down__timer--sperator">:</span>

            <span> {{ leftTimeDetail.minutes }} </span>
            <span class="count-down__timer--sperator">:</span>

            <span> {{ leftTimeDetail.seconds }} </span>

        </div>
                
    </div>

</template>

<script>
import { onBeforeMount, onUnmounted, reactive, ref } from 'vue'

export default {
    props: {
        date: {
            type: String,
            require: true
        }
    },

    setup(props){
        // data
        const countDownDate = ref(new Date(props.date).getTime())
        const timer = ref(null)
        const leftTimeDetail = reactive({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        })

        // methods
        const startReverseTimer = () => {
            // come each 1s update the count-down
            timer.value = setInterval(() => {
                // get now date
                const now = new Date().getTime()

                // get left time - difference now with count-down-date
                const leftTime = countDownDate.value - now

                // if left-time be less than 0 come stop the timer and remove disscount
                if(leftTime <= 0){
                    stopReverseTimer()
                    
                    // and back - dont continew
                    return
                }

                // get days, hours, minutes, seconds
                leftTimeDetail.days = Math.floor(leftTime / 24 / 60 / 60 / 1000)
                leftTimeDetail.hours = Math.floor(leftTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                leftTimeDetail.minutes = Math.floor(leftTime % (1000 * 60 * 60) / (1000 * 60))
                leftTimeDetail.seconds = Math.floor(leftTime % (1000 * 60) / 1000)

                // add zero format to left-time-detail
                for(const key in leftTimeDetail){
                    // if each time be less than 10 come add 0 to time
                    const newValue = addZeroFormatToNumber(leftTimeDetail[key])

                    // apply new value to the time
                    leftTimeDetail[key] = newValue
                }
            }, 1000) 
        }

        const stopReverseTimer = () => {
            // if timer is enable come stop 
            if(timer.value != null){
                clearInterval(timer.value)
                timer.value = null
            }
        }

        const addZeroFormatToNumber = (number) => {
            // add zero to number if less than 10 ==> "7" equal to "07"
            if(number < 10)
                number = '0' + number
            else
                number

            return number
        }

        // lifecycle hooks
        onBeforeMount(() => {
            startReverseTimer()
        })

        onUnmounted(() => {
            stopReverseTimer()
        })
    
        return {
            leftTimeDetail, timer
        }
    }
}
</script>

<style scoped>

    .product__expiration{
        flex-wrap: wrap;
    }

    .count-down__timer{
        display: flex;
        flex-direction: row-reverse;
    }

    .count-down__timer--sperator{
        margin: 0 0.5rem;
    }

</style>