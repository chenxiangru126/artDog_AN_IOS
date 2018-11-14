<template>
    <div>
        <div class="text-area">
            <textarea name="" id="" cols="30" rows="10" v-model="instruction"></textarea>
            <div class="upload-area flex-h">
                <p class="add-icon" @click='trigger_file'></p>
                <p class="flex-v flex-j-c" v-for="it in upimg_show_items" :key="it" v-if='upimg_show_items.length>0'>
                    <img :src="it" alt="" class="w">
                </p>
            </div>
        </div>
        <div class="submit_content">
            <div class="submit_btn">提交</div>
        </div>
    </div>
</template>
<style lang="less">
// .feed_content{
//     position: relative;
// }
// .pic_content{
//         position: absolute;
//         width: 4.0625rem;
//         height: 4.0625rem;
//         border: .0925rem solid #4E4E4E;
//         bottom: 3.1875rem;
//         line-height: 4.0625rem;
//         left: .75rem;
//         text-align: center;
//         img{
//             margin-top: 0.95rem;
//             width: 1.875rem;
//             height: 1.875rem;  
//             opacity:0.2;   
//         }
//     }
.text-area{
        padding: .4rem;
        position: relative;
        .upload-area{
            width: 92%;
            height: 4.333333rem;
            position: absolute;
            left: 1rem;
            right: 1rem;
            bottom: 1.3rem;
            p{
                width: 4.333333rem;
                height: 4.333333rem;
                margin: 0 0.5rem;
                overflow: hidden;
                img{
                    display: block;
                }
            }
            .add-icon{
                width: 4.333333rem;
                height: 4.333333rem;
                border: .066667rem solid #4E4E4E;
                background: url(../../static/images/add.svg) no-repeat;
                background-size: 1.5rem;
                background-position: center;
            }
        }
    }
    .submit_content{
        position: relative;
        width: 18.875rem;
        height: 2.375rem;
        background: #D1324E;
        box-shadow: 0 2px 10px 0 rgba(0,0,0,0.50);
        border-radius: 87px;
        margin: 0 auto;
        bottom:-18.125rem;
        .submit_btn{
            font-family: PingFangSC-Regular;
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: -1.56px;
            margin: 0 auto;
            width: 3.04375rem;
            height: 2.375rem;
            line-height: 2.375rem;
        }
    }
</style>
<script>
export default {
    data(){
        return{
            instruction:null,
            url:null,
            upimg_show_items:null,


        }
    },
    methods:{
        trigger_file(){
            
        }
    }
    
}
</script>


