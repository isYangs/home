<script setup lang="ts">
import { data as idata } from "~/api"

const yiyan = ref('');
const yiyanFrom = ref('');

const isLoading = toRef(false);
const network = reactive(useNetwork())
const { isOnline } = toRefs(network);

const getYiYan = async () => {
    if (!isOnline) {
        return;
    }
    const res = await idata.getYiYan({
        c: 'j',
        encode: 'json',
        charset: 'utf-8',
        max_length: 20,
    })
    yiyan.value = res.data.hitokoto;
    yiyanFrom.value = res.data.from;
    isLoading.value = true;
}

const reloadYiYan = () => {
    getYiYan();
}

watch(isOnline, (val) => {
    if (val) {
        getYiYan();
    }
})

onMounted(() => {
    getYiYan();
})
</script>

<template>
    <div class="w-full min-h-screen" flex="~ col center">
        <div class="w1080px h500px bg-base p10 rounded-2 flex-center" lt-xl="w-4/5" lt-md="w-full h-full">
            <div class="flex-1 max-h-full mr5 rounded-2 overflow-hidden flex-center shadow-box-base select-none"
                lt-lg="hidden">
                <img src="../assets/photo.png" class="w-full h-full pointer-events-none" />
            </div>
            <div class="flex-2 ml5 w-full h-full" lt-xl=" flex flex-col justify-center">
                <h1 class="font-base mt10 font-semibold" text="42px #20202a">
                    <span class="font-bold font-base" text="32px #20202a" lt-xs="hidden">Hello , </span>isYangs
                </h1>
                <div class="text-warm-gray-500 mt10 font-base">
                    很荣幸能在这里与你相遇，我是一名前端开发者，正在努力成为一名独立开发者，如果你对我的项目感兴趣可以去我的 GitHub 看看。
                </div>
                <div class="mt10 flex flex-col">
                    <span class="font-base" text="16px warm-gray-500">
                        今日一言：
                        <span class="cursor-pointer text-sm text-sky-600 select-none" @click="reloadYiYan">
                            [ <span class="text-sm">换一个</span> ]
                        </span>
                    </span>
                    <template v-if="isLoading || !isOnline">
                        <span class="font-base" text="16px warm-gray-500">{{ yiyan }} —— {{ yiyanFrom }}</span>
                    </template>
                    <template v-else>
                        <span class="font-base" text="16px warm-gray-500">加载中...</span>
                    </template>
                </div>
                <div class="flex mt20px justify-between" lt-md="flex-col">
                    <LinkButton n="Blog" c="#27ae60" ic="i-fa6-solid-blog" t="https://isyangs.cn" />
                    <LinkButton n="去图图床" c="#3498db" ic="i-zondicons-photo" t="https://7tu.top" />
                    <LinkButton n="GitHub" c="#1e272e" ic="i-codicon-github-inverted" t="https://github.com/isYangs" />
                </div>
                <div class="mt12 text-sm font-base" lt-md="mt10" lt-xs="flex flex-col items-center">
                    <span>&copy;isYangs </span>
                    <span>2021-PRESENT&nbsp;</span>
                    <a href="https://beian.miit.gov.cn/" class="text-sky-600" border="solid sky-600" hover="border-y-2"
                        p="y1" lt-xs="px1 hover:border-y-0 hover:border-x-2">陕ICP备2021005865号-1</a>&nbsp;
                </div>
            </div>
        </div>
        <div class="absolute top-10px right-10px cursor-pointer">
            <ToggleTheme />
        </div>
    </div>
</template>

<style scoped></style>
