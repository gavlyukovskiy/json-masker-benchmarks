window.BENCHMARK_DATA = {
  "lastUpdate": 1727133822360,
  "repoUrl": "https://github.com/Breus/json-masker",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Yauheni",
            "username": "donavdey",
            "email": "donavdey@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5932607c19c2dfa2fb617844c7a4c67cc825af32",
          "message": "Implement wildcards lookup (#83)\n\n* Implement wildcards lookup\r\n\r\n* Disallow a single leading wildcard segment",
          "timestamp": "2024-03-06T19:51:50Z",
          "url": "https://github.com/Breus/json-masker/commit/5932607c19c2dfa2fb617844c7a4c67cc825af32"
        },
        "date": 1727133819052,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2578910.7002688474,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82501.52446684316,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3028.98008555677,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10862.293136788636,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 74.57477158628394,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2.7330840365488203,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49900.42713537551,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1283.0909580814966,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 26.012273032780616,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5453.551932186393,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.51670156225623,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.193672749223661,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4575.448222497569,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2589.5627772905104,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 167.44039827980436,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"10\"} )",
            "value": 89957.85576063867,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"500\"} )",
            "value": 3133.3934929133634,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"2385\"} )",
            "value": 798.7964977740603,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 314951.44112450606,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12026.92405608727,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 213.2779104089299,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 272574.243499997,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 185051.0307307573,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5439.8539510263245,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 125.91131155444724,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 148204.4782288587,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 128.46029338047848,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"mask\"} )",
            "value": 11014285.728708537,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"allow\"} )",
            "value": 10983677.559653113,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"mask\"} )",
            "value": 8109494.269397044,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"allow\"} )",
            "value": 8178667.894712598,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9427.338373091123,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 879.5221746532025,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 75.90378339124376,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1018.3532103203875,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 91.71426190085565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.835096914459845,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy",
            "email": "agavlyukovskiy@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1508a8cdcd55a2c6f15cbbcb172fd9a0c92c5c85",
          "message": "Avoid tracking JsonPath when there are no JsonPath keys (#82)",
          "timestamp": "2024-03-04T17:15:54Z",
          "url": "https://github.com/Breus/json-masker/commit/1508a8cdcd55a2c6f15cbbcb172fd9a0c92c5c85"
        },
        "date": 1727133822242,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2583709.2322469302,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82688.22490781256,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3039.0932685429307,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 20715.964434616715,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 181.9871608088346,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.624532238720861,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 50155.90263888761,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1288.2449718595233,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 27.403102945228515,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5457.201462752239,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 152.3582141456716,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.264538004425315,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 6163.455708035171,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3027.8981457012173,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 172.687563011248,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"10\"} )",
            "value": 89797.38549740527,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"500\"} )",
            "value": 3103.8950652225326,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.InstanceCreationBenchmark.jsonMasker ( {\"numberOfTargetKeys\":\"2385\"} )",
            "value": 782.3798940477203,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 310490.27126507997,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12171.340132592375,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 217.69999834091524,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 244454.01578331986,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 11265.76993042384,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 211.05486412720055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 186114.73747864392,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5534.988908327716,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 125.48736840228914,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 138770.55957874202,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4771.980046429665,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 126.56681310398348,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"mask\"} )",
            "value": 10893153.582185755,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"false\",\"mode\":\"allow\"} )",
            "value": 11018858.66900595,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"mask\"} )",
            "value": 8109732.26621236,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.KeyMatcherBenchmark.matchAllKeys ( {\"caseSensitive\":\"true\",\"mode\":\"allow\"} )",
            "value": 8056598.227813435,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9694.94714130948,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 822.1746468475585,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 78.36648559517768,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1040.2998939965355,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 97.78057976430249,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8270349381897513,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}