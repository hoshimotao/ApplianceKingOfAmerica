# Formatting for Android

### Make sure that the container view is below the status bar at the top of the screen by using the following style:

##### paddingTop: Constants.statusBarHeight

### Create a reusable component that encapsulates styles for all wrapped Screen Views so that you have DRY code:

```javascript
function Screen({ children }) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});```