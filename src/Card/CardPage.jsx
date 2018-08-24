import React, { Component } from 'react';
import Card from './Card';
// import logo from './logo.svg';
import '../App.css';
import TopNavBar from '/Users/stevenbarash/Developer/stuff/src/Components/TopNavBar.jsx';
import DrawButton from '../DrawButton/DrawButton';
import VoiceButton from '../VoiceButton/VoiceButton';
import './Card.css';
import './CardPage.css';

import Footer from '../Components/Footer';

// import firebase from 'firebase/app';
// import 'firebase/database';

// import { DB_CONFIG } from './Config/Firebase/db_config';

class CardPage extends Component {
  constructor(props) {
    super(props);

    // this.app = firebase.initializeApp(DB_CONFIG);
    // this.database = this.app
    //   .database()
    //   .ref()
    //   .child('cards');
    this.updateCard = this.updateCard.bind(this);
    this.state = {
      cards: [
        {
          hanzi: '的',
          trad: '的',
          pinyin: 'de',
          def: "indicates possession, like adding 's to a noun"
        },
        {
          hanzi: '我',
          trad: '我',
          pinyin: 'wǒ',
          def: 'I; me'
        },
        {
          hanzi: '你',
          trad: '你',
          pinyin: 'nǐ',
          def: 'you (singular)'
        },
        {
          hanzi: '是',
          trad: '是',
          pinyin: 'shì',
          def: 'be; is; are; am'
        },
        {
          hanzi: '了',
          trad: '了',
          pinyin: 'le',
          def: 'indicates a completed or finished action'
        },
        {
          hanzi: '不',
          trad: '不',
          pinyin: 'bù',
          def: 'no; not'
        },
        {
          hanzi: '在',
          trad: '在',
          pinyin: 'zài',
          def: 'at; on; in; indicates an action in progress'
        },
        {
          hanzi: '他',
          trad: '他',
          pinyin: 'tā',
          def: 'he; him'
        },
        {
          hanzi: '我们',
          trad: '我們',
          pinyin: 'wǒmen',
          def: 'we; us'
        },
        {
          hanzi: '好',
          trad: '好',
          pinyin: 'hǎo',
          def: 'good'
        },
        {
          hanzi: '有',
          trad: '有',
          pinyin: 'yǒu',
          def: 'have'
        },
        {
          hanzi: '这',
          trad: '這',
          pinyin: 'zhè',
          def: 'this'
        },
        {
          hanzi: '会',
          trad: '會',
          pinyin: 'huì',
          def: 'know how to'
        },
        {
          hanzi: '吗',
          trad: '嗎',
          pinyin: 'ma',
          def: 'indicates a yes/no question (added to a statement)'
        },
        {
          hanzi: '什么',
          trad: '什麼',
          pinyin: 'shénme',
          def: 'what? (replaces the noun to turn a statement into a question)'
        },
        {
          hanzi: '说',
          trad: '說',
          pinyin: 'shuō',
          def: 'speak'
        },
        {
          hanzi: '她',
          trad: '她',
          pinyin: 'tā',
          def: 'she'
        },
        {
          hanzi: '想',
          trad: '想',
          pinyin: 'xiǎng',
          def: 'think; believe; suppose; would like to'
        },
        {
          hanzi: '一',
          trad: '一',
          pinyin: 'yī',
          def: 'one; once; a'
        },
        {
          hanzi: '很',
          trad: '很',
          pinyin: 'hěn',
          def: 'very; quite'
        },
        {
          hanzi: '人',
          trad: '人',
          pinyin: 'rén',
          def: 'person; man; people'
        },
        {
          hanzi: '那',
          trad: '那',
          pinyin: 'nà',
          def: 'that; then'
        },
        {
          hanzi: '来',
          trad: '來',
          pinyin: 'lái',
          def: 'come; arrive; ever since; next'
        },
        {
          hanzi: '都',
          trad: '都',
          pinyin: 'dōu',
          def: 'all; both'
        },
        {
          hanzi: '个',
          trad: '個',
          pinyin: 'ge',
          def: 'general measure word'
        },
        {
          hanzi: '能',
          trad: '能',
          pinyin: 'néng',
          def: 'can; be able'
        },
        {
          hanzi: '去',
          trad: '去',
          pinyin: 'qù',
          def: 'go; to leave'
        },
        {
          hanzi: '和',
          trad: '和',
          pinyin: 'hé',
          def: 'and; with'
        },
        {
          hanzi: '做',
          trad: '做',
          pinyin: 'zuò',
          def: 'do; make'
        },
        {
          hanzi: '上',
          trad: '上',
          pinyin: 'shàng',
          def: 'above; up'
        },
        {
          hanzi: '没有',
          trad: '沒有',
          pinyin: 'méiyǒu',
          def: 'not have; there is not'
        },
        {
          hanzi: '看',
          trad: '看',
          pinyin: 'kàn',
          def: 'see; look at; to watch'
        },
        {
          hanzi: '怎么',
          trad: '怎麼',
          pinyin: 'zěnme',
          def: 'how?'
        },
        {
          hanzi: '现在',
          trad: '現在',
          pinyin: 'xiànzài',
          def: 'now'
        },
        {
          hanzi: '点',
          trad: '點',
          pinyin: 'diǎn',
          def: "a dot; a little; o'clock"
        },
        {
          hanzi: '呢',
          trad: '呢',
          pinyin: 'ne',
          def: 'indicates a question; how about...?;'
        },
        {
          hanzi: '太',
          trad: '太',
          pinyin: 'tài',
          def: 'too (much)'
        },
        {
          hanzi: '里',
          trad: '裡',
          pinyin: 'lǐ',
          def: 'inside; Chinese mile (~.5 km)'
        },
        {
          hanzi: '听',
          trad: '聽',
          pinyin: 'tīng',
          def: 'listen; hear'
        },
        {
          hanzi: '谁',
          trad: '誰',
          pinyin: 'shéi',
          def: 'who'
        },
        {
          hanzi: '多',
          trad: '多',
          pinyin: 'duō',
          def: 'many'
        },
        {
          hanzi: '时候',
          trad: '時候',
          pinyin: 'shíhou',
          def: 'time'
        },
        {
          hanzi: '下',
          trad: '下',
          pinyin: 'xià',
          def: 'fall; below'
        },
        {
          hanzi: '谢谢',
          trad: '謝謝',
          pinyin: 'xièxie',
          def: 'thank you'
        },
        {
          hanzi: '先生',
          trad: '先生',
          pinyin: 'xiānsheng',
          def: 'Mr.; Sir'
        },
        {
          hanzi: '喜欢',
          trad: '喜歡',
          pinyin: 'xǐhuan',
          def: 'to like'
        },
        {
          hanzi: '大',
          trad: '大',
          pinyin: 'dà, dài',
          def: 'big; large'
        },
        {
          hanzi: '东西',
          trad: '東西',
          pinyin: 'dōngxi',
          def: 'things; stuff'
        },
        {
          hanzi: '小',
          trad: '小',
          pinyin: 'xiǎo',
          def: 'small; young'
        },
        {
          hanzi: '叫',
          trad: '叫',
          pinyin: 'jiào',
          def: 'to be called'
        },
        {
          hanzi: '爱',
          trad: '愛',
          pinyin: 'ài',
          def: 'love'
        },
        {
          hanzi: '年',
          trad: '年',
          pinyin: 'nián',
          def: 'year'
        },
        {
          hanzi: '请',
          trad: '請',
          pinyin: 'qǐng',
          def: 'please; invite; to treat someone to something'
        },
        {
          hanzi: '回',
          trad: '回',
          pinyin: 'huí',
          def: 'to return; to reply; to go back'
        },
        {
          hanzi: '工作',
          trad: '工作',
          pinyin: 'gōngzuò',
          def: 'work; a job'
        },
        {
          hanzi: '钱',
          trad: '錢',
          pinyin: 'qián',
          def: 'money; coin'
        },
        {
          hanzi: '吃',
          trad: '吃',
          pinyin: 'chī',
          def: 'eat'
        },
        {
          hanzi: '开',
          trad: '開',
          pinyin: 'kāi',
          def: 'to open; to start; to operate (a vehicle)'
        },
        {
          hanzi: '家',
          trad: '家',
          pinyin: 'jiā',
          def: 'family; home'
        },
        {
          hanzi: '哪',
          trad: '哪',
          pinyin: 'nǎa',
          def: 'which; how'
        },
        {
          hanzi: '朋友',
          trad: '朋友',
          pinyin: 'péngyou',
          def: 'friend'
        },
        {
          hanzi: '妈妈',
          trad: '媽媽',
          pinyin: 'māma',
          def: 'mom; mum'
        },
        {
          hanzi: '今天',
          trad: '今天',
          pinyin: 'jīntiān',
          def: 'today'
        },
        {
          hanzi: '几',
          trad: '幾',
          pinyin: 'jǐ',
          def: 'how many; several; a few'
        },
        {
          hanzi: '爸爸',
          trad: '爸爸',
          pinyin: 'bàba',
          def: 'Dad'
        },
        {
          hanzi: '些',
          trad: '些',
          pinyin: 'xiē',
          def: 'some; few; several'
        },
        {
          hanzi: '怎么样',
          trad: '怎麼樣',
          pinyin: 'zěnmeyàng',
          def: 'how about?; how is/was it?'
        },
        {
          hanzi: '对不起',
          trad: '對不起',
          pinyin: 'duìbuqǐ',
          def: 'sorry'
        },
        {
          hanzi: '住',
          trad: '住',
          pinyin: 'zhù',
          def: 'to live; reside; to stop'
        },
        {
          hanzi: '三',
          trad: '三',
          pinyin: 'sān',
          def: 'three'
        },
        {
          hanzi: '高兴',
          trad: '高興',
          pinyin: 'gāoxìng',
          def: 'happy; glad'
        },
        {
          hanzi: '买',
          trad: '買',
          pinyin: 'mǎi',
          def: 'to buy'
        },
        {
          hanzi: '医生',
          trad: '醫生',
          pinyin: 'yīshēng',
          def: 'doctor'
        },
        {
          hanzi: '哪儿',
          trad: '哪兒',
          pinyin: 'nǎr',
          def: 'where? (Beijing accent)'
        },
        {
          hanzi: '字',
          trad: '字',
          pinyin: 'zì',
          def: 'letter; character'
        },
        {
          hanzi: '名字',
          trad: '名字',
          pinyin: 'míngzi',
          def: 'name'
        },
        {
          hanzi: '认识',
          trad: '認識',
          pinyin: 'rènshi',
          def: 'recognize; know (a person)'
        },
        {
          hanzi: '坐',
          trad: '坐',
          pinyin: 'zuò',
          def: 'sit'
        },
        {
          hanzi: '喝',
          trad: '喝',
          pinyin: 'hē',
          def: 'to drink'
        },
        {
          hanzi: '写',
          trad: '寫',
          pinyin: 'xiě',
          def: 'to write; to compose'
        },
        {
          hanzi: '月',
          trad: '月',
          pinyin: 'yuè',
          def: 'moon; month; flesh (radical)'
        },
        {
          hanzi: '号',
          trad: '號',
          pinyin: 'hào',
          def: 'number; day of a month'
        },
        {
          hanzi: '狗',
          trad: '狗',
          pinyin: 'gǒu',
          def: 'dog'
        },
        {
          hanzi: '岁',
          trad: '歲',
          pinyin: 'suì',
          def: 'years old; age'
        },
        {
          hanzi: '看见',
          trad: '看見',
          pinyin: 'kànjiàn',
          def: 'see; catch sight of'
        },
        {
          hanzi: '打电话',
          trad: '打電話',
          pinyin: 'dǎ diànhuà',
          def: 'make a phone call'
        },
        {
          hanzi: '喂',
          trad: '喂',
          pinyin: 'wèi',
          def: 'hello (on the phone)'
        },
        {
          hanzi: '儿子',
          trad: '兒子',
          pinyin: 'érzi',
          def: 'son'
        },
        {
          hanzi: '漂亮',
          trad: '漂亮',
          pinyin: 'piàoliang',
          def: 'pretty; beautiful'
        },
        {
          hanzi: '分钟',
          trad: '分鐘',
          pinyin: 'fēnzhōng',
          def: 'minute; (measure word for time)'
        },
        {
          hanzi: '再见',
          trad: '再見',
          pinyin: 'zàijiàn',
          def: 'goodbye; see you later'
        },
        {
          hanzi: '本',
          trad: '本',
          pinyin: 'běn',
          def: 'measure word for books'
        },
        {
          hanzi: '明天',
          trad: '明天',
          pinyin: 'míngtiān',
          def: 'tomorrow'
        },
        {
          hanzi: '少',
          trad: '少',
          pinyin: 'shǎo',
          def: 'few; little'
        },
        {
          hanzi: '多少',
          trad: '多少',
          pinyin: 'duōshao',
          def: 'how much?; how many?'
        },
        {
          hanzi: '块',
          trad: '塊',
          pinyin: 'kuài',
          def: 'lump; piece; sum of money'
        },
        {
          hanzi: '女儿',
          trad: '女兒',
          pinyin: "nǚ'ér",
          def: 'daughter'
        },
        {
          hanzi: '小姐',
          trad: '小姐',
          pinyin: 'xiǎojie',
          def: 'young lady; miss; Ms.'
        },
        {
          hanzi: '衣服',
          trad: '衣服',
          pinyin: 'yīfu',
          def: 'clothes'
        },
        {
          hanzi: '水',
          trad: '水',
          pinyin: 'shuǐ',
          def: 'water'
        },
        {
          hanzi: '学校',
          trad: '學校',
          pinyin: 'xuéxiào',
          def: 'school'
        },
        {
          hanzi: '电影',
          trad: '電影',
          pinyin: 'diànyǐng',
          def: 'movie; film'
        },
        {
          hanzi: '书',
          trad: '書',
          pinyin: 'shū',
          def: 'book; letter'
        },
        {
          hanzi: '四',
          trad: '四',
          pinyin: 'sì',
          def: 'four'
        },
        {
          hanzi: '五',
          trad: '五',
          pinyin: 'wǔ',
          def: 'five'
        },
        {
          hanzi: '医院',
          trad: '醫院',
          pinyin: 'yīyuàn',
          def: 'hospital'
        },
        {
          hanzi: '没关系',
          trad: '沒關系',
          pinyin: 'méi guānxi',
          def: "it doesn't matter; never mind"
        },
        {
          hanzi: '飞机',
          trad: '飛機',
          pinyin: 'fēijī',
          def: 'airplane'
        },
        {
          hanzi: '二',
          trad: '二',
          pinyin: 'èr',
          def: 'two'
        },
        {
          hanzi: '电视',
          trad: '電視',
          pinyin: 'diànshì',
          def: 'television; TV'
        },
        {
          hanzi: '读',
          trad: '讀',
          pinyin: 'dú',
          def: 'to read; to study'
        },
        {
          hanzi: '后面',
          trad: '后面',
          pinyin: 'hòumian',
          def: 'back; behind'
        },
        {
          hanzi: '昨天',
          trad: '昨天',
          pinyin: 'zuótiān',
          def: 'yesterday'
        },
        {
          hanzi: '睡觉',
          trad: '睡覺',
          pinyin: 'shuì jiào',
          def: 'to sleep; go to bed'
        },
        {
          hanzi: '六',
          trad: '六',
          pinyin: 'liù',
          def: 'six'
        },
        {
          hanzi: '老师',
          trad: '老師',
          pinyin: 'lǎoshī',
          def: 'teacher'
        },
        {
          hanzi: '星期',
          trad: '星期',
          pinyin: 'xīngqī',
          def: 'week'
        },
        {
          hanzi: '十',
          trad: '十',
          pinyin: 'shí',
          def: 'ten'
        },
        {
          hanzi: '猫',
          trad: '貓',
          pinyin: 'māo',
          def: 'cat'
        },
        {
          hanzi: '电脑',
          trad: '電腦',
          pinyin: 'diànnǎo',
          def: 'computer'
        },
        {
          hanzi: '热',
          trad: '熱',
          pinyin: 'rè',
          def: 'heat; hot'
        },
        {
          hanzi: '学生',
          trad: '學生',
          pinyin: 'xuésheng',
          def: 'student'
        },
        {
          hanzi: '下午',
          trad: '下午',
          pinyin: 'xiàwǔ',
          def: 'afternoon'
        },
        {
          hanzi: '学习',
          trad: '學習',
          pinyin: 'xuéxí',
          def: 'learn; to study'
        },
        {
          hanzi: '冷',
          trad: '冷',
          pinyin: 'lěng',
          def: 'cold'
        },
        {
          hanzi: '不客气',
          trad: '不客氣',
          pinyin: 'bú kèqi',
          def: "you're welcome; don't be polite"
        },
        {
          hanzi: '前面',
          trad: '前面',
          pinyin: 'qiánmiàn',
          def: 'in front'
        },
        {
          hanzi: '八',
          trad: '八',
          pinyin: 'bā',
          def: 'eight'
        },
        {
          hanzi: '中国',
          trad: '中國',
          pinyin: 'Zhōngguó',
          def: 'China'
        },
        {
          hanzi: '七',
          trad: '七',
          pinyin: 'qī',
          def: 'seven'
        },
        {
          hanzi: '菜',
          trad: '菜',
          pinyin: 'cài',
          def: 'dish (type of food); vegetables'
        },
        {
          hanzi: '桌子',
          trad: '桌子',
          pinyin: 'zhuōzi',
          def: 'table; desk'
        },
        {
          hanzi: '出租车',
          trad: '出租車',
          pinyin: 'chūzūchē',
          def: 'taxi; cab'
        },
        {
          hanzi: '天气',
          trad: '天氣',
          pinyin: 'tiānqì',
          def: 'weather'
        },
        {
          hanzi: '茶',
          trad: '茶',
          pinyin: 'chá',
          def: 'tea'
        },
        {
          hanzi: '九',
          trad: '九',
          pinyin: 'jiǔ',
          def: 'nine'
        },
        {
          hanzi: '商店',
          trad: '商店',
          pinyin: 'shāngdiàn',
          def: 'shop; store'
        },
        {
          hanzi: '椅子',
          trad: '椅子',
          pinyin: 'yǐzi',
          def: 'chair'
        },
        {
          hanzi: '同学',
          trad: '同學',
          pinyin: 'tóngxué',
          def: 'fellow student; schoolmate'
        },
        {
          hanzi: '一点儿',
          trad: '一點兒',
          pinyin: 'yìdiǎnr',
          def: 'a bit; a few'
        },
        {
          hanzi: '苹果',
          trad: '蘋果',
          pinyin: 'píngguǒ',
          def: 'apple'
        },
        {
          hanzi: '饭店',
          trad: '飯店',
          pinyin: 'fàndiàn',
          def: 'restaurant; hotel'
        },
        {
          hanzi: '中午',
          trad: '中午',
          pinyin: 'zhōngwǔ',
          def: 'noon; midday'
        },
        {
          hanzi: '上午',
          trad: '上午',
          pinyin: 'shàngwǔ',
          def: 'late morning (before noon)'
        },
        {
          hanzi: '水果',
          trad: '水果',
          pinyin: 'shuǐguǒ',
          def: 'fruit'
        },
        {
          hanzi: '杯子',
          trad: '杯子',
          pinyin: 'bēizi',
          def: 'cup; glass'
        },
        {
          hanzi: '下雨',
          trad: '下雨',
          pinyin: 'xiàyǔ',
          def: 'to rain'
        },
        {
          hanzi: '米饭',
          trad: '米飯',
          pinyin: 'mǐfàn',
          def: '(cooked) rice'
        },
        {
          hanzi: '北京',
          trad: '北京',
          pinyin: 'Běijīng',
          def: 'Beijing'
        },
        {
          hanzi: '汉语',
          trad: '漢語',
          pinyin: 'Hànyǔ',
          def: 'Chinese language'
        }
      ],
      currentCard: {}
    };
  }

  componentWillMount() {
    //runs right after constructor but right before component is rendered

    const currentCards = this.state.cards;

    // this.database.on('child_added', snap => {
    //   currentCards.push({
    //     id: snap.key,
    //     def: snap.val().def,
    //     hanzi: snap.val().hanzi,
    //     pinyin: snap.val().pinyin
    //   });
    // });
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;

    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  render() {
    return (
      <div className="App">
        <TopNavBar />
        <div className="cardRow">
            <p className="directions">Double click to flip the card.</p>
          <Card
            def={this.state.currentCard.def}
            hanzi={this.state.currentCard.hanzi}
            pinyin={this.state.currentCard.pinyin}
          />
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
          {/* <VoiceButton toRead={this.state.currentCard.hanzi} /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default CardPage;
