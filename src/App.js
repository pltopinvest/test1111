import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './layouts/header.jsx';
import Main from './pages/main.jsx';
import Guide from './pages/guide.jsx';
import Footer from './layouts/footer.jsx';
import Switcher from './components/switcher.jsx';
import Context from './context/context';
import './App.css';

class App extends Component {
  state = {
    languageApp: 'EN',
    navLinks: [
        {
          lang: 'EN',
          link1: 'Guide',
          link1Route: '/guide',
        },
        {
          lang: 'DE',
          link1: 'DGuide',
          link1Route: '/guide',
        },
        {
          lang: 'FI',
          link1: 'FGuide',
          link1Route: '/guide'
        }
      ],
    sidebarItems: [
      {
        lang: 'EN',
        title: 'The 5 best Android smartphones for under $300'
      },
      {
        lang: 'EN',
        title: 'The best true wireless earbuds you can buy in 2019',
      },
      {
        lang: 'DE',
        title: 'DE-The 5 best Android smartphones for under $300'
      },
      {
        lang: 'DE',
        title: 'DE-The best true wireless earbuds you can buy in 2019'
      },
      {
        lang: 'FI',
        title: 'FI-The 5 best Android smartphones for under $300'
      },
      {
        lang: 'FI',
        title: 'FI-The best true wireless earbuds you can buy in 2019'
      }
    ],
    guideContent: [
      {
        lang: 'EN',
        mainTitle: "Build your reputation in the world's largest Android community",
        title1: 'What is your level?',
        text1: "The number next to every user's profile picture is the level of that user. By helping and contributing to the community, you increase your level.The higher your level, the more reputation you have in the community.",
        title2: "How to get points",
        text2: "All you need to do is make your posts or comments helpful, insightful, funny or positive and you'll get upvotes. For each upvote you'll get 50 points!",
        title3: "Summary of your points",
        text3: "When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."
      },
      {
        lang: 'DE',
        mainTitle: "DE-Build your reputation in the world's largest Android community",
        title1: 'What is your level?',
        text1: "The number next to every user's profile picture is the level of that user. By helping and contributing to the community, you increase your level.The higher your level, the more reputation you have in the community.",
        title2: "How to get points",
        text2: "All you need to do is make your posts or comments helpful, insightful, funny or positive and you'll get upvotes. For each upvote you'll get 50 points!",
        title3: "Summary of your points",
        text3: "When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."
      },
      {
        lang: 'FI',
        mainTitle: "FI-Build your reputation in the world's largest Android community",
        title1: 'What is your level?',
        text1: "The number next to every user's profile picture is the level of that user. By helping and contributing to the community, you increase your level.The higher your level, the more reputation you have in the community.",
        title2: "How to get points",
        text2: "All you need to do is make your posts or comments helpful, insightful, funny or positive and you'll get upvotes. For each upvote you'll get 50 points!",
        title3: "Summary of your points",
        text3: "When you visit your own user profile you'll see an overview of your activities. The numbers show you how often each event has occurred. The bars display the proportions of these activities to your overall activity."
      }
    ],
    mainTitle: [
      {
        lang: 'EN',
        text: 'Feast your eyes on the Android games with the best graphics'
      },
      {
        lang: 'DE',
        text: 'Feast your eyes on the Android games with the best graphics'
      },
      {
        lang: 'FI',
        text: 'Feast your eyes on the Android games with the best graphics'
      }
    ],
    articles: [
        { 
          lang: 'EN',
          title: 'Nimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          textNext: "Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free- roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'EN',
          title: 'Nimian Legends: BrightRidge 2',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textNext: "2.Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free - roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'DE',
          title: 'De.Nimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          textNext: "Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free- roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'De-Get it on the Play Store'
        },
        {
          lang: 'DE',
          title: 'Nimian Legends: BrightRidge 2',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textNext: "2.Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free - roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'FI',
          title: 'FiNimian Legends: BrightRidge',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          textNext: "Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free- roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        },
        {
          lang: 'FI',
          title: 'Nimian Legends: BrightRidge 2',
          link: 'https://play.google.com/store/apps/details?id=com.protopop.brightridge',
          textPrev: 'This single-dev project has been a long time in the making, but still offers one of the most graphically impressive titles on Android to date. This open-world adventure game offers an extensive settings menu to dial up graphical fidelity to suit your smartphones, and the maximum quality on high-end smartphones can be breathtaking.',
          url: 'https://www.youtube.com/embed/2WMzFkCcQyE',
          textNext: "2.Nimian Legends: Brightridge offers a couple of story modes to play through this lush fantasy world. There are quests to complete and enemies to overcome, and it's also possible to free - roam the game's environment, taking snapshots and shapeshifting your character from different types of humans to creatures like wolves, butterflies, birds or even mighty dragons and Lord of the Rings style tree-men. For 3 bucks with no in-app purchases, there's plenty of keep you entertained, whether you like a challenge or just want to casually explore and discover the beautiful game areas",
          linkText: 'Get it on the Play Store'
        }
      ]
  }

  switchHandler = event => {
    this.setState({
      languageApp: event.target.textContent
    })
  }

  filteredArticles = () => {
    return this.state.articles.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredNav = () => {
    return this.state.navLinks.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredSidebar = () => {
    return this.state.sidebarItems.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  filteredGuideContent = () => {
    return this.state.guideContent.filter(item => {
      return item.lang === this.state.languageApp
    })
  }

  render() {
    return (
      <Context.Provider value={this.filteredSidebar()}>
      <React.Fragment>
        <Switcher onClick = {this.switchHandler}/>
        <Header nav={this.filteredNav()} lang={this.state.languageApp}/>

        <Route path="/" exact render={(props) => <Main {...props} lang={this.state.languageApp} articles={this.filteredArticles()} />}/>
        <Route path="/guide" render={(props) => <Guide {...props} lang={this.state.languageApp} articles={this.filteredGuideContent()} />}/>
        
        <Footer nav={this.filteredNav()} lang={this.state.languageApp}/>
      </React.Fragment>
      </Context.Provider>
    )
  }
}

export default App;