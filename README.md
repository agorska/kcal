# kcal - beta

This is an app powered by Nutritionix API. By default it provides 200 API calls per day for all users. If you
want to use it for your own purpose, I suggest to create a free account in https://developer.nutritionix.com/
and paste Application ID an Application Key to the file, like below:

1. Create account in Nutritionix.
2. Download repo and go to the components/Search.vue.
3. Find 'x-app-id' and 'x-app-key' in the handleInput method.
4. Replace an existing values with those fromy you Nutritionix account.
5. You can now run the app and have 200 API calls per day.

## Nutritions
Calculations are based on my own needs. If you want to change it:
1. Go to components/Charts.vue
2. Find a whoNorms property in data and replace values.


### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
