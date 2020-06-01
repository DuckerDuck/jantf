---
title: "Example Post"
date: 2020-05-19T00:07:31+02:00
draft: false
---
## Subtitle of page
### Subsubtitle of page

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur.  

This text is inside of a paragraph

This is what a [link](#) looks like, this one has
already been visited: [link](https://google.com)

{{<button>}} Primary {{</button>}}
{{<button type="secondary">}} Secondary {{</button>}}
{{<button type="tertiary">}} Tertiary {{</button>}}
{{<button disabled="True">}} Primary {{</button>}}


* List item
* List item
* List item

1. List item
2. List item
3. List item


{{< figure 
    src="#"
    alt="example image"
    caption="Figure caption">}}


<img src="{{< imgproxy url="local:///mt_cook.jpg" gravity="no" >}}" alt='example image'>




```python
import numpy as np
np.random.seed(21)

def hello(name):
    print(f'Hello {name}!')

if __name__ == '__main__':
    # This is what a comment looks like
    hello('World')
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{{<katex>}}
\begin{aligned}
    p(\boldsymbol{\theta} | \mathcal{D}) &= \prod^K_{k=1} \theta_k^{N_k + \alpha_k -1}\\
    ln(p(\boldsymbol{\theta} | \mathcal{D})) &= ln(\prod^K_{k=1} \theta_k^{N_k + \alpha_k -1})\\
    &= \sum^K_{k=1} log(\theta_k^{N_k + \alpha_k -1})\\
    &= \sum^K_{k=1} (N_k + \alpha_k -1 )ln(\theta_k)
\end{aligned}
{{</katex>}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur.

When Dave asks HAL to open the pod bay door, HAL answers:
> I'm sorry, Dave. I'm afraid I can't do that.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.