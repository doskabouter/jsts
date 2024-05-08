import expect from 'expect.js'

import WKTReader from '../../../src/org/locationtech/jts/io/WKTReader.js'
import WKTWriter from '../../../src/org/locationtech/jts/io/WKTWriter.js'
import MaximumInscribedCircle from '../../../src/org/locationtech/jts/algorithm/construct/MaximumInscribedCircle.js'

describe('Test (#516)', function() {
  it('MaximumInscribedCircle basic test', function() {
    const reader = new WKTReader()
    const writer = new WKTWriter()
    const input = 'POLYGON((10 10, 100 10, 100 100, 10 100, 10 10))'
    const p = reader.read(input)
    const result = MaximumInscribedCircle.getCenter(p, 1)
    const wkt = writer.write(result)
    expect(wkt).to.equal('POINT (55 55)')
  })
})

describe('Test (#516_2)', function() {
  it('MaximumInscribedCircle basic test', function() {
    const reader = new WKTReader()
    const writer = new WKTWriter()
    const input = 'POLYGON ((425.94976480110165 330.85943632404815, 418.43033720004286 330.85943632404815, 412.8637045579554 327.91857379615203, 412.6406181497437 327.8852773173145, 412.16349919417087 327.63849165063885, 409.9694554143938 327.4865963120387, 403.4809526832453 326.51816306858456, 403.4797754775551 327.0373107779494, 393.95815973577857 326.37812199582567, 387.13382 323.8881602003393, 387.13382 330.85943632404815, 387.13382 388.27627615436074, 387.13382 391.7751696113219, 388.91668111653206 392.19742619155375, 393.5380365175088 397.09886373804216, 395.6386526088623 396.1185762287445, 394.7984061723197 394.2980422829034, 398.159391918484 393.31775477360725, 398.8595972822685 396.5386994470181, 403.3409116104871 393.43625106594203, 403.3409116104871 394.2980422829034, 408.6935926136383 391.4349803509878, 410.01403156581205 391.4027745228861, 414.12407421276777 393.4577958463646, 415.66452601309334 390.376892245715, 418.4653474682298 391.21713868225453, 419.34760622659815 388.27627615436074, 422.6813208164891 388.27627615436074, 424.62715466953216 389.95676902744293, 423.22674394196315 391.3571797550119, 424.487113596774 395.5584119377166, 429.52859221602057 395.9785351559871, 429.52859221602057 401.86026021177554, 432.04933152564536 400.039726265936, 435.27027619905465 401.4401369935065, 439.6115494545167 395.41837086496076, 446.8447388435081 393.8684017101743, 448.1563258290052 394.4645776126731, 450.53161319518404 396.92177143975584, 452.215246002633 406.0614923944817, 452.72635217639066 406.1491105956973, 452.7754102936609 406.4816156127515, 457.3156101851563 407.1695246872214, 457.5313247325191 407.45990965482497, 459.4973817859912 411.52309423199955, 464.39881933248114 412.64342281405305, 465.2390657690222 410.26272457718716, 466.9195586421044 410.96292994097246, 470.70066760654004 416.8446549967593, 474.3417354982191 413.90379246886624, 471.26083189756645 405.7814102489709, 478.54296768092456 402.140342357291, 481.9039534270874 396.6787405197724, 479.8033373357354 394.5781244284227, 481.3437891360626 390.376892245715, 478.6066227139941 388.27627615436074, 479.8033373357354 388.27627615436074, 474.90281270366904 384.378131560671, 473.5239555439386 379.84760089298214, 473.50148906167806 379.17360642516456, 473.5014890617069 379.17360642513347, 477.32180952648395 375.35328596035714, 484.9848570277401 374.412209951432, 486.3852677553091 372.17155278732116, 488.9060070649308 373.2918813693762, 489.1860892104455 369.9308956232118, 496.74830713931533 372.31159386007926, 502.0698679040766 370.49105991423744, 501.3696625402921 366.42986880428856, 506.69122330505184 363.34896520363895, 505.99101794126886 359.4278151664467, 509.07192154192 357.1871580023366, 509.3520036874332 355.22658298374046, 506.55118223229675 354.6664186927149, 505.85097686851225 349.34485792795135, 508.7918393964053 348.92473470968156, 508.93188046916345 346.9641596910862, 514.8136055249511 346.9641596910862, 519.014837707658 333.1000934881567, 521.6756180900379 332.39988812437065, 523.35611096312 334.36046314296755, 523.916275254148 332.2598470516148, 519.4349609259278 321.3366433765799, 523.35611096312 314.19454866597914, 519.5750019986859 314.19454866597914, 521.11545379901 311.39372721084266, 518.3146323438735 308.1727825374349, 519.8550841441992 307.47257717364965, 518.5947144893868 303.13130391818686, 521.3955359445232 299.0701128082388, 518.3146323438735 298.9300717354806, 521.2554948717666 293.7485520434775, 523.0760288176069 293.7485520434775, 519.2949198531712 283.80563587774026, 506.55118223229675 272.322267911679, 506.2711000867836 269.80152860205493, 501.92982683132 269.94156967481155, 488.6259249194176 280.0245269133038, 461.59799787734465 286.74649840563484, 442.8324941279229 297.5296610079147, 441.82641357163965 299.06525764645255, 438.6024031558207 301.0677485879549, 438.4912208724609 301.0306878268349, 438.5494917144674 301.10061283724264, 438.2111387269477 301.31076997234806, 439.76676525651914 302.99603204605023, 435.41031727181127 312.93417901116976, 437.37089229040663 317.41549333938843, 450.67479420230745 319.37606835798533, 443.3926584189508 320.07627372176904, 427.56801719742674 330.57935417852957, 425.94976480110165 330.85943632404815))'
    const p = reader.read(input)
    const result = MaximumInscribedCircle.getCenter(p, 0.14704312639470435)
    const wkt = writer.write(result)
    expect(wkt).to.equal('POINT (485.112268172771 317.5551689861935)')
  })
})
