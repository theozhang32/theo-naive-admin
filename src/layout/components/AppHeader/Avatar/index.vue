<script setup lang="ts">
  const dropdownOptions = [
    {
      label: '消息',
      key: 'message',
    },
    {
      type: 'divider',
      key: 'd1',
    },
    {
      label: '个人设置',
      key: 'userSetting',
    },
    {
      label: '退出登录',
      key: 'logout',
    },
  ];
</script>

<template>
  <div class="cursor-pointer pr-2">
    <NDropdown :options="dropdownOptions" placement="bottom-end">
      <NBadge :value="20">
        <NAvatar
          round
          size="medium"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </NBadge>
    </NDropdown>
  </div>
</template>
