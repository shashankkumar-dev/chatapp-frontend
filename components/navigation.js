import { CommonActions } from '@react-navigation/native';

let _navigator;

export function setNavigator(ref) {
    _navigator = ref;
}

export function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params,
        })
    );
}
