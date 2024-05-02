import * as React from 'react';
import { Platform, RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import LottieView from 'lottie-react-native';
import { createRandomUser } from '@/utils/generate-dummy-data';
import { ThreadsContext } from '@/context/thread-context';
import ThreadsItem from '@/components/ThreadsItem';


export default function TabOneScreen() {
  const animationRef = React.useRef<LottieView>(null)
  const threads = React.useContext(ThreadsContext)
  return (
    <SafeAreaView 
      // style={{flex: 1}}
      >
      <ScrollView
      // style={{flex: 1}}
        contentContainerStyle = {{
          // backgroundColor: 'gray',
          paddingHorizontal: 10,
          paddingTop: Platform.select({android: 30})
        }}
        refreshControl={<RefreshControl refreshing = {false}
          onRefresh={() => {animationRef.current?.play()}}
          tintColor="transparent"
        />}
      >
        <LottieView
          ref = {animationRef}
          source={require("../../lottie-animation/threads.json")}
          loop={false}
          autoPlay
          style={{width: 90, height: 90, alignSelf: 'center'}}
          // onAnimationFinish={() => {
          //   alert("Finished")
          // }}
        />
        {
          threads.map((thread) => (
            <ThreadsItem key={thread.id} {...thread}/>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
