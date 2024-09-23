window.BENCHMARK_DATA = {
  "lastUpdate": 1727131981167,
  "repoUrl": "https://github.com/Breus/json-masker",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "committer": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "distinct": true,
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131977907,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2580162.730072283,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82214.92256114322,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3037.917780220078,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10906.545765337998,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 74.40654603380004,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2.7275812156988954,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49901.095306063165,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1298.8415813951049,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 26.63353088882306,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5423.322114007952,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.2267001204045,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.322078682939701,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3154.0965255997617,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2117.0601231255055,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 168.97779775393244,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 349603.18590283813,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12042.382037709052,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 202.15187613682915,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 256053.07366305985,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 215.07992235732993,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 194529.10771919243,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5492.5735749585265,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 125.9145593103339,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 149432.36213639847,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9620.324441419158,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 843.6101092950967,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 78.35718773120807,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1036.6655120986752,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 92.19313104934258,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.7951716529258819,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "committer": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "distinct": true,
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979415,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2586661.1131487596,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82676.81786993363,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3041.524977861491,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21542.404699485433,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 185.51683124558727,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.640519373176681,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 50578.73983346706,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1324.353420908322,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 27.161831878210723,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5423.893577097291,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 154.4260463902136,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.071092890655802,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 6049.791303681061,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2871.0079089617425,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 174.99883375007565,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 239359.79513520747,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5897.1668933036735,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 143.64036214833254,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 127789.18718145583,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4470.834075422169,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 136.66684025754031,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 156079.55756029274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3571.352890626067,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 97.78606021745274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 99380.72899741329,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2951.83198259693,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 90.71832830643388,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9713.820972912807,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 886.69605996685,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 75.8698380090443,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1055.6614558956908,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 91.63866572545957,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8229031017444364,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "committer": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "distinct": true,
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979921,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2581257.808615077,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82605.40137078609,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3037.104409242707,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 21602.218556673357,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 187.6298717257238,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5.610257546463285,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49667.422531025506,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1304.192793382719,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 27.14658923426802,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3322.193205071761,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 158.81779926734146,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.130306773707924,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5050.24288557958,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2616.3923189257875,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 173.10235481247682,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 347301.6499108462,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12144.267613446718,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 202.86104004251646,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 289450.5770874631,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10908.268852210216,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 244.10018913724286,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 199687.1464982274,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5515.2612255795275,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 123.06063946324905,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 137468.01098111525,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5287.181849026479,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 127.67074155324433,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9808.286989039347,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 896.9699179321964,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 78.01970704623575,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1072.754930398881,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 92.59545436217725,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.837211649902173,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "committer": {
            "email": "agavlyukovskiy@gmail.com",
            "name": "Artur Havliukovskyi",
            "username": "gavlyukovskiy"
          },
          "distinct": true,
          "id": "740d6ce34d85487ddf4999114fc8765245b979fe",
          "message": "Frankenstein the benchmarks",
          "timestamp": "2024-09-24T00:44:51+02:00",
          "tree_id": "34330a9a91f96a2e52ecc9e72da58dbd2a2c4cb7",
          "url": "https://github.com/Breus/json-masker/commit/740d6ce34d85487ddf4999114fc8765245b979fe"
        },
        "date": 1727131979954,
        "tool": "jmh",
        "benches": [
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2574228.0742830695,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 82530.64417907756,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.countBytes ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3032.655662517717,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 30624.43571629253,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 340.4487762512096,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseAndMask ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 9.50318441412743,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 49352.715120637324,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 1305.494402721278,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.jacksonParseOnly ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 25.95452772660637,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5409.3727107628365,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 153.9749318393298,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.regexReplace ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 4.057960457045383,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 3651.42392639991,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 2116.442726749106,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.BaselineBenchmark.writeFile ( {\"characters\":\"unicode\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 162.5422854699663,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 305499.63596422103,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 12393.696148832212,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 214.8184172926483,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 208123.99124262613,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 10487.043488354377,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerBytes ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 242.83773599383198,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 199010.1498790027,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5701.696472583154,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"false\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 134.83951293550558,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 144106.09548051024,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"32kb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 5359.264097662392,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.JsonMaskerBenchmark.jsonMaskerString ( {\"characters\":\"unicode\",\"jsonPath\":\"true\",\"jsonSize\":\"1mb\",\"maskedKeyProbability\":\"0.1\"} )",
            "value": 131.36076264229294,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 9768.807344348383,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 889.7938385748785,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"10\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 77.3805728553877,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"100\"} )",
            "value": 1032.9750575586331,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"1000\"} )",
            "value": 91.06785817291363,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          },
          {
            "name": "dev.blaauwendraad.masker.json.LargeKeySetInstanceCreationBenchmark.jsonMasker ( {\"keyLength\":\"100\",\"numberOfTargetKeys\":\"10000\"} )",
            "value": 1.8260186160748864,
            "unit": "ops/s",
            "extra": "iterations: 3\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}