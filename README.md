<!--
 * @Author: Huangjs
 * @Date: 2021-05-10 15:55:29
 * @LastEditors: Huangjs
 * @LastEditTime: 2021-05-10 16:44:47
 * @Description: ******
-->
## rsa_encrypt
实现rsa加密的功能
### 使用方法
```javascript
import encrypt from  '@huangjs888/rsa-encrypt';
import api from  './api';

const key ='00db5ae7937c3b485dfdab80e6db019d2de26ca7e00b044611b15dff9390ca6a279f75b8e5d99ecc531d551f23604a3bcc42a0c7da9f9f8ed661732815ff8cff5382d789d8d623ebfdd2bb72027d606b1c5e7691ff1114e6df31e1f3909a6133b030238c32d3e8bac1678cfe3eb01bc297d7ccbcacb948d385b3495228600c8cbb';
const hex = '1001';
encrypt.set(key,hex);

const submit = ()=>{
	const useName = 'Huangjs';
	const password = 'test@123';
	api.login(useName,encrypt(password));
}
// 登录事件里调用submit方法

