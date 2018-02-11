/**
 * Mocking client-server processing
 */

import axios from 'axios';

const _papers = [
  {
    "id": "some_id",
    "authors": "Sasha Targ; Diogo Almeida; Kevin Lyman",
    "files": [
      "https://arxiv.org/pdf/1603.08029v1"
    ],
    "title": "Resnet in Resnet: Generalizing Residual Architectures",
    "abstract": "Residual networks (ResNets) have recently achieved state-of-the-art onchallenging computer vision tasks. We introduce Resnet in Resnet (RiR): a deepdual-stream architecture that generalizes ResNets and standard CNNs and iseasily implemented with no computational overhead. RiR consistently improvesperformance over ResNets, outperforms architectures with similar amounts ofaugmentation on CIFAR-10, and establishes a new state-of-the-art on CIFAR-100.",
    "url": "http://arxiv.org/abs/1603.08029v1",
  },
  {
    "id": "some_other_id",
    "authors": "Martin Arjovsky; Soumith Chintala; Léon Bottou",
    "files": [
      "http://arxiv.org/abs/1701.07875v1/pdf"
    ],
    "title": "Wasserstein GAN",
    "abstract": "We introduce a new algorithm named WGAN, an alternative to traditional GANtraining. In this new model, we show that we can improve the stability oflearning, get rid of problems like mode collapse, and provide meaningfullearning curves useful for debugging and hyperparameter searches. Furthermore,we show that the corresponding optimization problem is sound, and provideextensive theoretical work highlighting the deep connections to other distancesbetween distributions.",
    "url": "http://arxiv.org/abs/1701.07875v1",
  }
]

export default {
  getPapers (cb) {
    // uncomment me, when backend is ready
    // axios.get('http://localhost:8888/sheets')
    //     .then(response => {
    //          cb(response.data)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })

    setTimeout(() => cb(_papers), 100)
  },

}