function sr(a) {
      return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
  }
  var ri = {
      exports: {}
  };
  (function(a, t) {
      (function(e) {
          var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,
              i = /^(?=([^\/?#]*))\1([^]*)$/,
              r = /(?:\/|^)\.(?=\/)/g,
              n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
              o = {
                  buildAbsoluteURL: function(l, c, h) {
                      if (h = h || {}, l = l.trim(), c = c.trim(), !c) {
                          if (!h.alwaysNormalize) return l;
                          var u = o.parseURL(l);
                          if (!u) throw new Error("Error trying to parse base URL.");
                          return u.path = o.normalizePath(u.path), o.buildURLFromParts(u)
                      }
                      var d = o.parseURL(c);
                      if (!d) throw new Error("Error trying to parse relative URL.");
                      if (d.scheme) return h.alwaysNormalize ? (d.path = o.normalizePath(d.path), o.buildURLFromParts(d)) : c;
                      var f = o.parseURL(l);
                      if (!f) throw new Error("Error trying to parse base URL.");
                      if (!f.netLoc && f.path && f.path[0] !== "/") {
                          var g = i.exec(f.path);
                          f.netLoc = g[1], f.path = g[2]
                      }
                      f.netLoc && !f.path && (f.path = "/");
                      var p = {
                          scheme: f.scheme,
                          netLoc: d.netLoc,
                          path: null,
                          params: d.params,
                          query: d.query,
                          fragment: d.fragment
                      };
                      if (!d.netLoc && (p.netLoc = f.netLoc, d.path[0] !== "/"))
                          if (!d.path) p.path = f.path, d.params || (p.params = f.params, d.query || (p.query = f.query));
                          else {
                              var T = f.path,
                                  y = T.substring(0, T.lastIndexOf("/") + 1) + d.path;
                              p.path = o.normalizePath(y)
                          } return p.path === null && (p.path = h.alwaysNormalize ? o.normalizePath(d.path) : d.path), o.buildURLFromParts(p)
                  },
                  parseURL: function(l) {
                      var c = s.exec(l);
                      return c ? {
                          scheme: c[1] || "",
                          netLoc: c[2] || "",
                          path: c[3] || "",
                          params: c[4] || "",
                          query: c[5] || "",
                          fragment: c[6] || ""
                      } : null
                  },
                  normalizePath: function(l) {
                      for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(n, "")).length;);
                      return l.split("").reverse().join("")
                  },
                  buildURLFromParts: function(l) {
                      return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment
                  }
              };
          a.exports = o
      })()
  })(ri);
  var qe = ri.exports;
  
  function cs(a, t) {
      var e = Object.keys(a);
      if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(a);
          t && (s = s.filter(function(i) {
              return Object.getOwnPropertyDescriptor(a, i).enumerable
          })), e.push.apply(e, s)
      }
      return e
  }
  
  function at(a) {
      for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t] != null ? arguments[t] : {};
          t % 2 ? cs(Object(e), !0).forEach(function(s) {
              ir(a, s, e[s])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e)) : cs(Object(e)).forEach(function(s) {
              Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(e, s))
          })
      }
      return a
  }
  
  function ir(a, t, e) {
      return t = nr(t), t in a ? Object.defineProperty(a, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : a[t] = e, a
  }
  
  function tt() {
      return tt = Object.assign ? Object.assign.bind() : function(a) {
          for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (a[s] = e[s])
          }
          return a
      }, tt.apply(this, arguments)
  }
  
  function rr(a, t) {
      if (typeof a != "object" || a === null) return a;
      var e = a[Symbol.toPrimitive];
      if (e !== void 0) {
          var s = e.call(a, t || "default");
          if (typeof s != "object") return s;
          throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return (t === "string" ? String : Number)(a)
  }
  
  function nr(a) {
      var t = rr(a, "string");
      return typeof t == "symbol" ? t : String(t)
  }
  const F = Number.isFinite || function(a) {
          return typeof a == "number" && isFinite(a)
      },
      ar = Number.isSafeInteger || function(a) {
          return typeof a == "number" && Math.abs(a) <= or
      },
      or = Number.MAX_SAFE_INTEGER || 9007199254740991;
  let m = function(a) {
          return a.MEDIA_ATTACHING = "hlsMediaAttaching", a.MEDIA_ATTACHED = "hlsMediaAttached", a.MEDIA_DETACHING = "hlsMediaDetaching", a.MEDIA_DETACHED = "hlsMediaDetached", a.BUFFER_RESET = "hlsBufferReset", a.BUFFER_CODECS = "hlsBufferCodecs", a.BUFFER_CREATED = "hlsBufferCreated", a.BUFFER_APPENDING = "hlsBufferAppending", a.BUFFER_APPENDED = "hlsBufferAppended", a.BUFFER_EOS = "hlsBufferEos", a.BUFFER_FLUSHING = "hlsBufferFlushing", a.BUFFER_FLUSHED = "hlsBufferFlushed", a.MANIFEST_LOADING = "hlsManifestLoading", a.MANIFEST_LOADED = "hlsManifestLoaded", a.MANIFEST_PARSED = "hlsManifestParsed", a.LEVEL_SWITCHING = "hlsLevelSwitching", a.LEVEL_SWITCHED = "hlsLevelSwitched", a.LEVEL_LOADING = "hlsLevelLoading", a.LEVEL_LOADED = "hlsLevelLoaded", a.LEVEL_UPDATED = "hlsLevelUpdated", a.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", a.LEVELS_UPDATED = "hlsLevelsUpdated", a.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", a.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", a.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", a.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", a.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", a.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", a.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", a.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", a.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", a.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", a.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", a.CUES_PARSED = "hlsCuesParsed", a.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", a.INIT_PTS_FOUND = "hlsInitPtsFound", a.FRAG_LOADING = "hlsFragLoading", a.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", a.FRAG_LOADED = "hlsFragLoaded", a.FRAG_DECRYPTED = "hlsFragDecrypted", a.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", a.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", a.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", a.FRAG_PARSED = "hlsFragParsed", a.FRAG_BUFFERED = "hlsFragBuffered", a.FRAG_CHANGED = "hlsFragChanged", a.FPS_DROP = "hlsFpsDrop", a.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", a.ERROR = "hlsError", a.DESTROYING = "hlsDestroying", a.KEY_LOADING = "hlsKeyLoading", a.KEY_LOADED = "hlsKeyLoaded", a.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", a.BACK_BUFFER_REACHED = "hlsBackBufferReached", a
      }({}),
      N = function(a) {
          return a.NETWORK_ERROR = "networkError", a.MEDIA_ERROR = "mediaError", a.KEY_SYSTEM_ERROR = "keySystemError", a.MUX_ERROR = "muxError", a.OTHER_ERROR = "otherError", a
      }({}),
      L = function(a) {
          return a.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", a.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", a.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_PARSING_ERROR = "levelParsingError", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.FRAG_GAP = "fragGap", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.UNKNOWN = "unknown", a
      }({});
  const kt = function() {},
      Ne = {
          trace: kt,
          debug: kt,
          log: kt,
          warn: kt,
          info: kt,
          error: kt
      };
  let Kt = Ne;
  
  function lr(a) {
      const t = self.console[a];
      return t ? t.bind(self.console, `[${a}] >`) : kt
  }
  
  function cr(a, ...t) {
      t.forEach(function(e) {
          Kt[e] = a[e] ? a[e].bind(a) : lr(e)
      })
  }
  
  function hr(a, t) {
      if (self.console && a === !0 || typeof a == "object") {
          cr(a, "debug", "log", "info", "warn", "error");
          try {
              Kt.log(`Debug logs enabled for "${t}" in hls.js version 1.4.14`)
          } catch {
              Kt = Ne
          }
      } else Kt = Ne
  }
  const x = Kt,
      ur = /^(\d+)x(\d+)$/,
      hs = /(.+?)=(".*?"|.*?)(?:,|$)/g;
  class Q {
      constructor(t) {
          typeof t == "string" && (t = Q.parseAttrList(t));
          for (const e in t) t.hasOwnProperty(e) && (e.substring(0, 2) === "X-" && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(e)), this[e] = t[e])
      }
      decimalInteger(t) {
          const e = parseInt(this[t], 10);
          return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
      }
      hexadecimalInteger(t) {
          if (this[t]) {
              let e = (this[t] || "0x").slice(2);
              e = (e.length & 1 ? "0" : "") + e;
              const s = new Uint8Array(e.length / 2);
              for (let i = 0; i < e.length / 2; i++) s[i] = parseInt(e.slice(i * 2, i * 2 + 2), 16);
              return s
          } else return null
      }
      hexadecimalIntegerAsNumber(t) {
          const e = parseInt(this[t], 16);
          return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
      }
      decimalFloatingPoint(t) {
          return parseFloat(this[t])
      }
      optionalFloat(t, e) {
          const s = this[t];
          return s ? parseFloat(s) : e
      }
      enumeratedString(t) {
          return this[t]
      }
      bool(t) {
          return this[t] === "YES"
      }
      decimalResolution(t) {
          const e = ur.exec(this[t]);
          if (e !== null) return {
              width: parseInt(e[1], 10),
              height: parseInt(e[2], 10)
          }
      }
      static parseAttrList(t) {
          let e;
          const s = {},
              i = '"';
          for (hs.lastIndex = 0;
              (e = hs.exec(t)) !== null;) {
              let r = e[2];
              r.indexOf(i) === 0 && r.lastIndexOf(i) === r.length - 1 && (r = r.slice(1, -1));
              const n = e[1].trim();
              s[n] = r
          }
          return s
      }
  }
  
  function dr(a) {
      return a !== "ID" && a !== "CLASS" && a !== "START-DATE" && a !== "DURATION" && a !== "END-DATE" && a !== "END-ON-NEXT"
  }
  
  function fr(a) {
      return a === "SCTE35-OUT" || a === "SCTE35-IN"
  }
  class ni {
      constructor(t, e) {
          if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, e) {
              const s = e.attr;
              for (const i in s)
                  if (Object.prototype.hasOwnProperty.call(t, i) && t[i] !== s[i]) {
                      x.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${t.ID}"`), this._badValueForSameId = i;
                      break
                  } t = tt(new Q({}), s, t)
          }
          if (this.attr = t, this._startDate = new Date(t["START-DATE"]), "END-DATE" in this.attr) {
              const s = new Date(this.attr["END-DATE"]);
              F(s.getTime()) && (this._endDate = s)
          }
      }
      get id() {
          return this.attr.ID
      }
      get class() {
          return this.attr.CLASS
      }
      get startDate() {
          return this._startDate
      }
      get endDate() {
          if (this._endDate) return this._endDate;
          const t = this.duration;
          return t !== null ? new Date(this._startDate.getTime() + t * 1e3) : null
      }
      get duration() {
          if ("DURATION" in this.attr) {
              const t = this.attr.decimalFloatingPoint("DURATION");
              if (F(t)) return t
          } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
          return null
      }
      get plannedDuration() {
          return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null
      }
      get endOnNext() {
          return this.attr.bool("END-ON-NEXT")
      }
      get isValid() {
          return !!this.id && !this._badValueForSameId && F(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class)
      }
  }
  class he {
      constructor() {
          this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
              start: 0,
              first: 0,
              end: 0
          }, this.parsing = {
              start: 0,
              end: 0
          }, this.buffering = {
              start: 0,
              first: 0,
              end: 0
          }
      }
  }
  var H = {
      AUDIO: "audio",
      VIDEO: "video",
      AUDIOVIDEO: "audiovideo"
  };
  class ai {
      constructor(t) {
          this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
              [H.AUDIO]: null,
              [H.VIDEO]: null,
              [H.AUDIOVIDEO]: null
          }, this.baseurl = t
      }
      setByteRange(t, e) {
          const s = t.split("@", 2),
              i = [];
          s.length === 1 ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(s[1]), i[1] = parseInt(s[0]) + i[0], this._byteRange = i
      }
      get byteRange() {
          return this._byteRange ? this._byteRange : []
      }
      get byteRangeStartOffset() {
          return this.byteRange[0]
      }
      get byteRangeEndOffset() {
          return this.byteRange[1]
      }
      get url() {
          return !this._url && this.baseurl && this.relurl && (this._url = qe.buildAbsoluteURL(this.baseurl, this.relurl, {
              alwaysNormalize: !0
          })), this._url || ""
      }
      set url(t) {
          this._url = t
      }
  }
  class ge extends ai {
      constructor(t, e) {
          super(e), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new he, this.urlId = 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.type = t
      }
      get decryptdata() {
          const {
              levelkeys: t
          } = this;
          if (!t && !this._decryptdata) return null;
          if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
              const e = this.levelkeys.identity;
              if (e) this._decryptdata = e.getDecryptData(this.sn);
              else {
                  const s = Object.keys(this.levelkeys);
                  if (s.length === 1) return this._decryptdata = this.levelkeys[s[0]].getDecryptData(this.sn)
              }
          }
          return this._decryptdata
      }
      get end() {
          return this.start + this.duration
      }
      get endProgramDateTime() {
          if (this.programDateTime === null || !F(this.programDateTime)) return null;
          const t = F(this.duration) ? this.duration : 0;
          return this.programDateTime + t * 1e3
      }
      get encrypted() {
          var t;
          if ((t = this._decryptdata) != null && t.encrypted) return !0;
          if (this.levelkeys) {
              const e = Object.keys(this.levelkeys),
                  s = e.length;
              if (s > 1 || s === 1 && this.levelkeys[e[0]].encrypted) return !0
          }
          return !1
      }
      setKeyFormat(t) {
          if (this.levelkeys) {
              const e = this.levelkeys[t];
              e && !this._decryptdata && (this._decryptdata = e.getDecryptData(this.sn))
          }
      }
      abortRequests() {
          var t, e;
          (t = this.loader) == null || t.abort(), (e = this.keyLoader) == null || e.abort()
      }
      setElementaryStreamInfo(t, e, s, i, r, n = !1) {
          const {
              elementaryStreams: o
          } = this, l = o[t];
          if (!l) {
              o[t] = {
                  startPTS: e,
                  endPTS: s,
                  startDTS: i,
                  endDTS: r,
                  partial: n
              };
              return
          }
          l.startPTS = Math.min(l.startPTS, e), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, i), l.endDTS = Math.max(l.endDTS, r)
      }
      clearElementaryStreamInfo() {
          const {
              elementaryStreams: t
          } = this;
          t[H.AUDIO] = null, t[H.VIDEO] = null, t[H.AUDIOVIDEO] = null
      }
  }
  class gr extends ai {
      constructor(t, e, s, i, r) {
          super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new he, this.duration = t.decimalFloatingPoint("DURATION"), this.gap = t.bool("GAP"), this.independent = t.bool("INDEPENDENT"), this.relurl = t.enumeratedString("URI"), this.fragment = e, this.index = i;
          const n = t.enumeratedString("BYTERANGE");
          n && this.setByteRange(n, r), r && (this.fragOffset = r.fragOffset + r.duration)
      }
      get start() {
          return this.fragment.start + this.fragOffset
      }
      get end() {
          return this.start + this.duration
      }
      get loaded() {
          const {
              elementaryStreams: t
          } = this;
          return !!(t.audio || t.video || t.audiovideo)
      }
  }
  const mr = 10;
  class pr {
      constructor(t) {
          this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = t
      }
      reloaded(t) {
          if (!t) {
              this.advanced = !0, this.updated = !0;
              return
          }
          const e = this.lastPartSn - t.lastPartSn,
              s = this.lastPartIndex - t.lastPartIndex;
          this.updated = this.endSN !== t.endSN || !!s || !!e || !this.live, this.advanced = this.endSN > t.endSN || e > 0 || e === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(t.misses * .6) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
      }
      get hasProgramDateTime() {
          return this.fragments.length ? F(this.fragments[this.fragments.length - 1].programDateTime) : !1
      }
      get levelTargetDuration() {
          return this.averagetargetduration || this.targetduration || mr
      }
      get drift() {
          const t = this.driftEndTime - this.driftStartTime;
          return t > 0 ? (this.driftEnd - this.driftStart) * 1e3 / t : 1
      }
      get edge() {
          return this.partEnd || this.fragmentEnd
      }
      get partEnd() {
          var t;
          return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
      }
      get fragmentEnd() {
          var t;
          return (t = this.fragments) != null && t.length ? this.fragments[this.fragments.length - 1].end : 0
      }
      get age() {
          return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
      }
      get lastPartIndex() {
          var t;
          return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].index : -1
      }
      get lastPartSn() {
          var t;
          return (t = this.partList) != null && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
      }
  }
  
  function je(a) {
      return Uint8Array.from(atob(a), t => t.charCodeAt(0))
  }
  
  function Tr(a) {
      const t = oi(a).subarray(0, 16),
          e = new Uint8Array(16);
      return e.set(t, 16 - t.length), e
  }
  
  function yr(a) {
      const t = function(s, i, r) {
          const n = s[i];
          s[i] = s[r], s[r] = n
      };
      t(a, 0, 3), t(a, 1, 2), t(a, 4, 5), t(a, 6, 7)
  }
  
  function xr(a) {
      const t = a.split(":");
      let e = null;
      if (t[0] === "data" && t.length === 2) {
          const s = t[1].split(";"),
              i = s[s.length - 1].split(",");
          if (i.length === 2) {
              const r = i[0] === "base64",
                  n = i[1];
              r ? (s.splice(-1, 1), e = je(n)) : e = Tr(n)
          }
      }
      return e
  }
  
  function oi(a) {
      return Uint8Array.from(unescape(encodeURIComponent(a)), t => t.charCodeAt(0))
  }
  var J = {
          CLEARKEY: "org.w3.clearkey",
          FAIRPLAY: "com.apple.fps",
          PLAYREADY: "com.microsoft.playready",
          WIDEVINE: "com.widevine.alpha"
      },
      ct = {
          CLEARKEY: "org.w3.clearkey",
          FAIRPLAY: "com.apple.streamingkeydelivery",
          PLAYREADY: "com.microsoft.playready",
          WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
      };
  
  function us(a) {
      switch (a) {
          case ct.FAIRPLAY:
              return J.FAIRPLAY;
          case ct.PLAYREADY:
              return J.PLAYREADY;
          case ct.WIDEVINE:
              return J.WIDEVINE;
          case ct.CLEARKEY:
              return J.CLEARKEY
      }
  }
  var li = {
      WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
  };
  
  function Er(a) {
      if (a === li.WIDEVINE) return J.WIDEVINE
  }
  
  function ds(a) {
      switch (a) {
          case J.FAIRPLAY:
              return ct.FAIRPLAY;
          case J.PLAYREADY:
              return ct.PLAYREADY;
          case J.WIDEVINE:
              return ct.WIDEVINE;
          case J.CLEARKEY:
              return ct.CLEARKEY
      }
  }
  
  function me(a) {
      const {
          drmSystems: t,
          widevineLicenseUrl: e
      } = a, s = t ? [J.FAIRPLAY, J.WIDEVINE, J.PLAYREADY, J.CLEARKEY].filter(i => !!t[i]) : [];
      return !s[J.WIDEVINE] && e && s.push(J.WIDEVINE), s
  }
  const ci = function() {
      return typeof self < "u" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null
  }();
  
  function Sr(a, t, e, s) {
      let i;
      switch (a) {
          case J.FAIRPLAY:
              i = ["cenc", "sinf"];
              break;
          case J.WIDEVINE:
          case J.PLAYREADY:
              i = ["cenc"];
              break;
          case J.CLEARKEY:
              i = ["cenc", "keyids"];
              break;
          default:
              throw new Error(`Unknown key-system: ${a}`)
      }
      return vr(i, t, e, s)
  }
  
  function vr(a, t, e, s) {
      return [{
          initDataTypes: a,
          persistentState: s.persistentState || "not-allowed",
          distinctiveIdentifier: s.distinctiveIdentifier || "not-allowed",
          sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
          audioCapabilities: t.map(r => ({
              contentType: `audio/mp4; codecs="${r}"`,
              robustness: s.audioRobustness || "",
              encryptionScheme: s.audioEncryptionScheme || null
          })),
          videoCapabilities: e.map(r => ({
              contentType: `video/mp4; codecs="${r}"`,
              robustness: s.videoRobustness || "",
              encryptionScheme: s.videoEncryptionScheme || null
          }))
      }]
  }
  
  function _t(a, t, e) {
      return Uint8Array.prototype.slice ? a.slice(t, e) : new Uint8Array(Array.prototype.slice.call(a, t, e))
  }
  const Xe = (a, t) => t + 10 <= a.length && a[t] === 73 && a[t + 1] === 68 && a[t + 2] === 51 && a[t + 3] < 255 && a[t + 4] < 255 && a[t + 6] < 128 && a[t + 7] < 128 && a[t + 8] < 128 && a[t + 9] < 128,
      hi = (a, t) => t + 10 <= a.length && a[t] === 51 && a[t + 1] === 68 && a[t + 2] === 73 && a[t + 3] < 255 && a[t + 4] < 255 && a[t + 6] < 128 && a[t + 7] < 128 && a[t + 8] < 128 && a[t + 9] < 128,
      re = (a, t) => {
          const e = t;
          let s = 0;
          for (; Xe(a, t);) {
              s += 10;
              const i = ue(a, t + 6);
              s += i, hi(a, t + 10) && (s += 10), t += s
          }
          if (s > 0) return a.subarray(e, e + s)
      },
      ue = (a, t) => {
          let e = 0;
          return e = (a[t] & 127) << 21, e |= (a[t + 1] & 127) << 14, e |= (a[t + 2] & 127) << 7, e |= a[t + 3] & 127, e
      },
      Ar = (a, t) => Xe(a, t) && ue(a, t + 6) + 10 <= a.length - t,
      Lr = a => {
          const t = di(a);
          for (let e = 0; e < t.length; e++) {
              const s = t[e];
              if (ui(s)) return kr(s)
          }
      },
      ui = a => a && a.key === "PRIV" && a.info === "com.apple.streaming.transportStreamTimestamp",
      Rr = a => {
          const t = String.fromCharCode(a[0], a[1], a[2], a[3]),
              e = ue(a, 4),
              s = 10;
          return {
              type: t,
              size: e,
              data: a.subarray(s, s + e)
          }
      },
      di = a => {
          let t = 0;
          const e = [];
          for (; Xe(a, t);) {
              const s = ue(a, t + 6);
              t += 10;
              const i = t + s;
              for (; t + 8 < i;) {
                  const r = Rr(a.subarray(t)),
                      n = Ir(r);
                  n && e.push(n), t += r.size + 10
              }
              hi(a, t) && (t += 10)
          }
          return e
      },
      Ir = a => a.type === "PRIV" ? br(a) : a.type[0] === "W" ? Cr(a) : Dr(a),
      br = a => {
          if (a.size < 2) return;
          const t = St(a.data, !0),
              e = new Uint8Array(a.data.subarray(t.length + 1));
          return {
              key: a.type,
              info: t,
              data: e.buffer
          }
      },
      Dr = a => {
          if (a.size < 2) return;
          if (a.type === "TXXX") {
              let e = 1;
              const s = St(a.data.subarray(e), !0);
              e += s.length + 1;
              const i = St(a.data.subarray(e));
              return {
                  key: a.type,
                  info: s,
                  data: i
              }
          }
          const t = St(a.data.subarray(1));
          return {
              key: a.type,
              data: t
          }
      },
      Cr = a => {
          if (a.type === "WXXX") {
              if (a.size < 2) return;
              let e = 1;
              const s = St(a.data.subarray(e), !0);
              e += s.length + 1;
              const i = St(a.data.subarray(e));
              return {
                  key: a.type,
                  info: s,
                  data: i
              }
          }
          const t = St(a.data);
          return {
              key: a.type,
              data: t
          }
      },
      kr = a => {
          if (a.data.byteLength === 8) {
              const t = new Uint8Array(a.data),
                  e = t[3] & 1;
              let s = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
              return s /= 45, e && (s += 4772185884e-2), Math.round(s)
          }
      },
      St = (a, t = !1) => {
          const e = _r();
          if (e) {
              const c = e.decode(a);
              if (t) {
                  const h = c.indexOf("\0");
                  return h !== -1 ? c.substring(0, h) : c
              }
              return c.replace(/\0/g, "")
          }
          const s = a.length;
          let i, r, n, o = "",
              l = 0;
          for (; l < s;) {
              if (i = a[l++], i === 0 && t) return o;
              if (i === 0 || i === 3) continue;
              switch (i >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                      o += String.fromCharCode(i);
                      break;
                  case 12:
                  case 13:
                      r = a[l++], o += String.fromCharCode((i & 31) << 6 | r & 63);
                      break;
                  case 14:
                      r = a[l++], n = a[l++], o += String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | (n & 63) << 0);
                      break
              }
          }
          return o
      };
  let pe;
  
  function _r() {
      if (!navigator.userAgent.includes("PlayStation 4")) return !pe && typeof self.TextDecoder < "u" && (pe = new self.TextDecoder("utf-8")), pe
  }
  const xt = {
          hexDump: function(a) {
              let t = "";
              for (let e = 0; e < a.length; e++) {
                  let s = a[e].toString(16);
                  s.length < 2 && (s = "0" + s), t += s
              }
              return t
          }
      },
      ne = Math.pow(2, 32) - 1,
      wr = [].push,
      fi = {
          video: 1,
          audio: 2,
          id3: 3,
          text: 4
      };
  
  function st(a) {
      return String.fromCharCode.apply(null, a)
  }
  
  function gi(a, t) {
      const e = a[t] << 8 | a[t + 1];
      return e < 0 ? 65536 + e : e
  }
  
  function B(a, t) {
      const e = mi(a, t);
      return e < 0 ? 4294967296 + e : e
  }
  
  function mi(a, t) {
      return a[t] << 24 | a[t + 1] << 16 | a[t + 2] << 8 | a[t + 3]
  }
  
  function Te(a, t, e) {
      a[t] = e >> 24, a[t + 1] = e >> 16 & 255, a[t + 2] = e >> 8 & 255, a[t + 3] = e & 255
  }
  
  function $(a, t) {
      const e = [];
      if (!t.length) return e;
      const s = a.byteLength;
      for (let i = 0; i < s;) {
          const r = B(a, i),
              n = st(a.subarray(i + 4, i + 8)),
              o = r > 1 ? i + r : s;
          if (n === t[0])
              if (t.length === 1) e.push(a.subarray(i + 8, o));
              else {
                  const l = $(a.subarray(i + 8, o), t.slice(1));
                  l.length && wr.apply(e, l)
              } i = o
      }
      return e
  }
  
  function Pr(a) {
      const t = [],
          e = a[0];
      let s = 8;
      const i = B(a, s);
      s += 4;
      const r = 0,
          n = 0;
      e === 0 ? s += 8 : s += 16, s += 2;
      let o = a.length + n;
      const l = gi(a, s);
      s += 2;
      for (let c = 0; c < l; c++) {
          let h = s;
          const u = B(a, h);
          h += 4;
          const d = u & 2147483647;
          if ((u & 2147483648) >>> 31 === 1) return x.warn("SIDX has hierarchical references (not supported)"), null;
          const g = B(a, h);
          h += 4, t.push({
              referenceSize: d,
              subsegmentDuration: g,
              info: {
                  duration: g / i,
                  start: o,
                  end: o + d - 1
              }
          }), o += d, h += 4, s = h
      }
      return {
          earliestPresentationTime: r,
          timescale: i,
          version: e,
          referencesCount: l,
          references: t
      }
  }
  
  function pi(a) {
      const t = [],
          e = $(a, ["moov", "trak"]);
      for (let i = 0; i < e.length; i++) {
          const r = e[i],
              n = $(r, ["tkhd"])[0];
          if (n) {
              let o = n[0],
                  l = o === 0 ? 12 : 20;
              const c = B(n, l),
                  h = $(r, ["mdia", "mdhd"])[0];
              if (h) {
                  o = h[0], l = o === 0 ? 12 : 20;
                  const u = B(h, l),
                      d = $(r, ["mdia", "hdlr"])[0];
                  if (d) {
                      const f = st(d.subarray(8, 12)),
                          g = {
                              soun: H.AUDIO,
                              vide: H.VIDEO
                          } [f];
                      if (g) {
                          const p = $(r, ["mdia", "minf", "stbl", "stsd"])[0];
                          let T;
                          p && (T = st(p.subarray(12, 16))), t[c] = {
                              timescale: u,
                              type: g
                          }, t[g] = {
                              timescale: u,
                              id: c,
                              codec: T
                          }
                      }
                  }
              }
          }
      }
      return $(a, ["moov", "mvex", "trex"]).forEach(i => {
          const r = B(i, 4),
              n = t[r];
          n && (n.default = {
              duration: B(i, 12),
              flags: B(i, 20)
          })
      }), t
  }
  
  function Fr(a, t) {
      if (!a || !t) return a;
      const e = t.keyId;
      return e && t.isCommonEncryption && $(a, ["moov", "trak"]).forEach(i => {
          const n = $(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
          let o = $(n, ["enca"]);
          const l = o.length > 0;
          l || (o = $(n, ["encv"])), o.forEach(c => {
              const h = l ? c.subarray(28) : c.subarray(78);
              $(h, ["sinf"]).forEach(d => {
                  const f = Ti(d);
                  if (f) {
                      const g = f.subarray(8, 24);
                      g.some(p => p !== 0) || (x.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${xt.hexDump(g)} -> ${xt.hexDump(e)}`), f.set(e, 8))
                  }
              })
          })
      }), a
  }
  
  function Ti(a) {
      const t = $(a, ["schm"])[0];
      if (t) {
          const e = st(t.subarray(4, 8));
          if (e === "cbcs" || e === "cenc") return $(a, ["schi", "tenc"])[0]
      }
      return x.error("[eme] missing 'schm' box"), null
  }
  
  function Or(a, t) {
      return $(t, ["moof", "traf"]).reduce((e, s) => {
          const i = $(s, ["tfdt"])[0],
              r = i[0],
              n = $(s, ["tfhd"]).reduce((o, l) => {
                  const c = B(l, 4),
                      h = a[c];
                  if (h) {
                      let u = B(i, 4);
                      if (r === 1) {
                          if (u === ne) return x.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
                          u *= ne + 1, u += B(i, 8)
                      }
                      const d = h.timescale || 9e4,
                          f = u / d;
                      if (F(f) && (o === null || f < o)) return f
                  }
                  return o
              }, null);
          return n !== null && F(n) && (e === null || n < e) ? n : e
      }, null)
  }
  
  function Mr(a, t) {
      let e = 0,
          s = 0,
          i = 0;
      const r = $(a, ["moof", "traf"]);
      for (let n = 0; n < r.length; n++) {
          const o = r[n],
              l = $(o, ["tfhd"])[0],
              c = B(l, 4),
              h = t[c];
          if (!h) continue;
          const u = h.default,
              d = B(l, 0) | (u == null ? void 0 : u.flags);
          let f = u == null ? void 0 : u.duration;
          d & 8 && (d & 2 ? f = B(l, 12) : f = B(l, 8));
          const g = h.timescale || 9e4,
              p = $(o, ["trun"]);
          for (let T = 0; T < p.length; T++) {
              if (e = Nr(p[T]), !e && f) {
                  const y = B(p[T], 4);
                  e = f * y
              }
              h.type === H.VIDEO ? s += e / g : h.type === H.AUDIO && (i += e / g)
          }
      }
      if (s === 0 && i === 0) {
          let n = 0;
          const o = $(a, ["sidx"]);
          for (let l = 0; l < o.length; l++) {
              const c = Pr(o[l]);
              c != null && c.references && (n += c.references.reduce((h, u) => h + u.info.duration || 0, 0))
          }
          return n
      }
      return s || i
  }
  
  function Nr(a) {
      const t = B(a, 0);
      let e = 8;
      t & 1 && (e += 4), t & 4 && (e += 4);
      let s = 0;
      const i = B(a, 4);
      for (let r = 0; r < i; r++) {
          if (t & 256) {
              const n = B(a, e);
              s += n, e += 4
          }
          t & 512 && (e += 4), t & 1024 && (e += 4), t & 2048 && (e += 4)
      }
      return s
  }
  
  function Ur(a, t, e) {
      $(t, ["moof", "traf"]).forEach(s => {
          $(s, ["tfhd"]).forEach(i => {
              const r = B(i, 4),
                  n = a[r];
              if (!n) return;
              const o = n.timescale || 9e4;
              $(s, ["tfdt"]).forEach(l => {
                  const c = l[0];
                  let h = B(l, 4);
                  if (c === 0) h -= e * o, h = Math.max(h, 0), Te(l, 4, h);
                  else {
                      h *= Math.pow(2, 32), h += B(l, 8), h -= e * o, h = Math.max(h, 0);
                      const u = Math.floor(h / (ne + 1)),
                          d = Math.floor(h % (ne + 1));
                      Te(l, 4, u), Te(l, 8, d)
                  }
              })
          })
      })
  }
  
  function Br(a) {
      const t = {
              valid: null,
              remainder: null
          },
          e = $(a, ["moof"]);
      if (e) {
          if (e.length < 2) return t.remainder = a, t
      } else return t;
      const s = e[e.length - 1];
      return t.valid = _t(a, 0, s.byteOffset - 8), t.remainder = _t(a, s.byteOffset - 8), t
  }
  
  function wt(a, t) {
      const e = new Uint8Array(a.length + t.length);
      return e.set(a), e.set(t, a.length), e
  }
  
  function fs(a, t) {
      const e = [],
          s = t.samples,
          i = t.timescale,
          r = t.id;
      let n = !1;
      return $(s, ["moof"]).map(l => {
          const c = l.byteOffset - 8;
          $(l, ["traf"]).map(u => {
              const d = $(u, ["tfdt"]).map(f => {
                  const g = f[0];
                  let p = B(f, 4);
                  return g === 1 && (p *= Math.pow(2, 32), p += B(f, 8)), p / i
              })[0];
              return d !== void 0 && (a = d), $(u, ["tfhd"]).map(f => {
                  const g = B(f, 4),
                      p = B(f, 0) & 16777215,
                      T = (p & 1) !== 0,
                      y = (p & 2) !== 0,
                      S = (p & 8) !== 0;
                  let E = 0;
                  const R = (p & 16) !== 0;
                  let A = 0;
                  const _ = (p & 32) !== 0;
                  let D = 8;
                  g === r && (T && (D += 8), y && (D += 4), S && (E = B(f, D), D += 4), R && (A = B(f, D), D += 4), _ && (D += 4), t.type === "video" && (n = $r(t.codec)), $(u, ["trun"]).map(C => {
                      const k = C[0],
                          I = B(C, 0) & 16777215,
                          O = (I & 1) !== 0;
                      let w = 0;
                      const V = (I & 4) !== 0,
                          nt = (I & 256) !== 0;
                      let j = 0;
                      const z = (I & 512) !== 0;
                      let X = 0;
                      const P = (I & 1024) !== 0,
                          M = (I & 2048) !== 0;
                      let W = 0;
                      const Y = B(C, 4);
                      let K = 8;
                      O && (w = B(C, K), K += 4), V && (K += 4);
                      let Z = w + c;
                      for (let ht = 0; ht < Y; ht++) {
                          if (nt ? (j = B(C, K), K += 4) : j = E, z ? (X = B(C, K), K += 4) : X = A, P && (K += 4), M && (k === 0 ? W = B(C, K) : W = mi(C, K), K += 4), t.type === H.VIDEO) {
                              let mt = 0;
                              for (; mt < X;) {
                                  const ut = B(s, Z);
                                  if (Z += 4, Gr(n, s[Z])) {
                                      const Dt = s.subarray(Z, Z + ut);
                                      yi(Dt, n ? 2 : 1, a + W / i, e)
                                  }
                                  Z += ut, mt += ut + 4
                              }
                          }
                          a += j / i
                      }
                  }))
              })
          })
      }), e
  }
  
  function $r(a) {
      if (!a) return !1;
      const t = a.indexOf("."),
          e = t < 0 ? a : a.substring(0, t);
      return e === "hvc1" || e === "hev1" || e === "dvh1" || e === "dvhe"
  }
  
  function Gr(a, t) {
      if (a) {
          const e = t >> 1 & 63;
          return e === 39 || e === 40
      } else return (t & 31) === 6
  }
  
  function yi(a, t, e, s) {
      const i = xi(a);
      let r = 0;
      r += t;
      let n = 0,
          o = 0,
          l = !1,
          c = 0;
      for (; r < i.length;) {
          n = 0;
          do {
              if (r >= i.length) break;
              c = i[r++], n += c
          } while (c === 255);
          o = 0;
          do {
              if (r >= i.length) break;
              c = i[r++], o += c
          } while (c === 255);
          const h = i.length - r;
          if (!l && n === 4 && r < i.length) {
              if (l = !0, i[r++] === 181) {
                  const d = gi(i, r);
                  if (r += 2, d === 49) {
                      const f = B(i, r);
                      if (r += 4, f === 1195456820) {
                          const g = i[r++];
                          if (g === 3) {
                              const p = i[r++],
                                  T = 31 & p,
                                  y = 64 & p,
                                  S = y ? 2 + T * 3 : 0,
                                  E = new Uint8Array(S);
                              if (y) {
                                  E[0] = p;
                                  for (let R = 1; R < S; R++) E[R] = i[r++]
                              }
                              s.push({
                                  type: g,
                                  payloadType: n,
                                  pts: e,
                                  bytes: E
                              })
                          }
                      }
                  }
              }
          } else if (n === 5 && o < h) {
              if (l = !0, o > 16) {
                  const u = [];
                  for (let g = 0; g < 16; g++) {
                      const p = i[r++].toString(16);
                      u.push(p.length == 1 ? "0" + p : p), (g === 3 || g === 5 || g === 7 || g === 9) && u.push("-")
                  }
                  const d = o - 16,
                      f = new Uint8Array(d);
                  for (let g = 0; g < d; g++) f[g] = i[r++];
                  s.push({
                      payloadType: n,
                      pts: e,
                      uuid: u.join(""),
                      userData: St(f),
                      userDataBytes: f
                  })
              }
          } else if (o < h) r += o;
          else if (o > h) break
      }
  }
  
  function xi(a) {
      const t = a.byteLength,
          e = [];
      let s = 1;
      for (; s < t - 2;) a[s] === 0 && a[s + 1] === 0 && a[s + 2] === 3 ? (e.push(s + 2), s += 2) : s++;
      if (e.length === 0) return a;
      const i = t - e.length,
          r = new Uint8Array(i);
      let n = 0;
      for (s = 0; s < i; n++, s++) n === e[0] && (n++, e.shift()), r[s] = a[n];
      return r
  }
  
  function Kr(a) {
      const t = a[0];
      let e = "",
          s = "",
          i = 0,
          r = 0,
          n = 0,
          o = 0,
          l = 0,
          c = 0;
      if (t === 0) {
          for (; st(a.subarray(c, c + 1)) !== "\0";) e += st(a.subarray(c, c + 1)), c += 1;
          for (e += st(a.subarray(c, c + 1)), c += 1; st(a.subarray(c, c + 1)) !== "\0";) s += st(a.subarray(c, c + 1)), c += 1;
          s += st(a.subarray(c, c + 1)), c += 1, i = B(a, 12), r = B(a, 16), o = B(a, 20), l = B(a, 24), c = 28
      } else if (t === 1) {
          c += 4, i = B(a, c), c += 4;
          const u = B(a, c);
          c += 4;
          const d = B(a, c);
          for (c += 4, n = 2 ** 32 * u + d, ar(n) || (n = Number.MAX_SAFE_INTEGER, x.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = B(a, c), c += 4, l = B(a, c), c += 4; st(a.subarray(c, c + 1)) !== "\0";) e += st(a.subarray(c, c + 1)), c += 1;
          for (e += st(a.subarray(c, c + 1)), c += 1; st(a.subarray(c, c + 1)) !== "\0";) s += st(a.subarray(c, c + 1)), c += 1;
          s += st(a.subarray(c, c + 1)), c += 1
      }
      const h = a.subarray(c, a.byteLength);
      return {
          schemeIdUri: e,
          value: s,
          timeScale: i,
          presentationTime: n,
          presentationTimeDelta: r,
          eventDuration: o,
          id: l,
          payload: h
      }
  }
  
  function Hr(a, ...t) {
      const e = t.length;
      let s = 8,
          i = e;
      for (; i--;) s += t[i].byteLength;
      const r = new Uint8Array(s);
      for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(a, 4), i = 0, s = 8; i < e; i++) r.set(t[i], s), s += t[i].byteLength;
      return r
  }
  
  function Vr(a, t, e) {
      if (a.byteLength !== 16) throw new RangeError("Invalid system id");
      let s, i;
      if (t) {
          s = 1, i = new Uint8Array(t.length * 16);
          for (let o = 0; o < t.length; o++) {
              const l = t[o];
              if (l.byteLength !== 16) throw new RangeError("Invalid key");
              i.set(l, o * 16)
          }
      } else s = 0, i = new Uint8Array;
      let r;
      s > 0 ? (r = new Uint8Array(4), t.length > 0 && new DataView(r.buffer).setUint32(0, t.length, !1)) : r = new Uint8Array;
      const n = new Uint8Array(4);
      return e && e.byteLength > 0 && new DataView(n.buffer).setUint32(0, e.byteLength, !1), Hr([112, 115, 115, 104], new Uint8Array([s, 0, 0, 0]), a, r, i, n, e || new Uint8Array)
  }
  
  function Wr(a) {
      if (!(a instanceof ArrayBuffer) || a.byteLength < 32) return null;
      const t = {
              version: 0,
              systemId: "",
              kids: null,
              data: null
          },
          e = new DataView(a),
          s = e.getUint32(0);
      if (a.byteLength !== s && s > 44 || e.getUint32(4) !== 1886614376 || (t.version = e.getUint32(8) >>> 24, t.version > 1)) return null;
      t.systemId = xt.hexDump(new Uint8Array(a, 12, 16));
      const r = e.getUint32(28);
      if (t.version === 0) {
          if (s - 32 < r) return null;
          t.data = new Uint8Array(a, 32, r)
      } else if (t.version === 1) {
          t.kids = [];
          for (let n = 0; n < r; n++) t.kids.push(new Uint8Array(a, 32 + n * 16, 16))
      }
      return t
  }
  let qt = {};
  class Vt {
      static clearKeyUriToKeyIdMap() {
          qt = {}
      }
      constructor(t, e, s, i = [1], r = null) {
          this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = t ? t !== "NONE" : !1, this.isCommonEncryption = this.encrypted && t !== "AES-128"
      }
      isSupported() {
          if (this.method) {
              if (this.method === "AES-128" || this.method === "NONE") return !0;
              if (this.keyFormat === "identity") return this.method === "SAMPLE-AES";
              switch (this.keyFormat) {
                  case ct.FAIRPLAY:
                  case ct.WIDEVINE:
                  case ct.PLAYREADY:
                  case ct.CLEARKEY:
                      return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1
              }
          }
          return !1
      }
      getDecryptData(t) {
          if (!this.encrypted || !this.uri) return null;
          if (this.method === "AES-128" && this.uri && !this.iv) {
              typeof t != "number" && (this.method === "AES-128" && !this.iv && x.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), t = 0);
              const s = Yr(t);
              return new Vt(this.method, this.uri, "identity", this.keyFormatVersions, s)
          }
          const e = xr(this.uri);
          if (e) switch (this.keyFormat) {
              case ct.WIDEVINE:
                  this.pssh = e, e.length >= 22 && (this.keyId = e.subarray(e.length - 22, e.length - 6));
                  break;
              case ct.PLAYREADY: {
                  const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
                  this.pssh = Vr(s, null, e);
                  const i = new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
                      r = String.fromCharCode.apply(null, Array.from(i)),
                      n = r.substring(r.indexOf("<"), r.length),
                      c = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("KID")[0];
                  if (c) {
                      const h = c.childNodes[0] ? c.childNodes[0].nodeValue : c.getAttribute("VALUE");
                      if (h) {
                          const u = je(h).subarray(0, 16);
                          yr(u), this.keyId = u
                      }
                  }
                  break
              }
              default: {
                  let s = e.subarray(0, 16);
                  if (s.length !== 16) {
                      const i = new Uint8Array(16);
                      i.set(s, 16 - s.length), s = i
                  }
                  this.keyId = s;
                  break
              }
          }
          if (!this.keyId || this.keyId.byteLength !== 16) {
              let s = qt[this.uri];
              if (!s) {
                  const i = Object.keys(qt).length % Number.MAX_SAFE_INTEGER;
                  s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, i), qt[this.uri] = s
              }
              this.keyId = s
          }
          return this
      }
  }
  
  function Yr(a) {
      const t = new Uint8Array(16);
      for (let e = 12; e < 16; e++) t[e] = a >> 8 * (15 - e) & 255;
      return t
  }
  const Ei = /\{\$([a-zA-Z0-9-_]+)\}/g;
  
  function gs(a) {
      return Ei.test(a)
  }
  
  function lt(a, t, e) {
      if (a.variableList !== null || a.hasVariableRefs)
          for (let s = e.length; s--;) {
              const i = e[s],
                  r = t[i];
              r && (t[i] = Ue(a, r))
          }
  }
  
  function Ue(a, t) {
      if (a.variableList !== null || a.hasVariableRefs) {
          const e = a.variableList;
          return t.replace(Ei, s => {
              const i = s.substring(2, s.length - 1),
                  r = e == null ? void 0 : e[i];
              return r === void 0 ? (a.playlistParsingError || (a.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r
          })
      }
      return t
  }
  
  function ms(a, t, e) {
      let s = a.variableList;
      s || (a.variableList = s = {});
      let i, r;
      if ("QUERYPARAM" in t) {
          i = t.QUERYPARAM;
          try {
              const n = new self.URL(e).searchParams;
              if (n.has(i)) r = n.get(i);
              else throw new Error(`"${i}" does not match any query parameter in URI: "${e}"`)
          } catch (n) {
              a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${n.message}`))
          }
      } else i = t.NAME, r = t.VALUE;
      i in s ? a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = r || ""
  }
  
  function qr(a, t, e) {
      const s = t.IMPORT;
      if (e && s in e) {
          let i = a.variableList;
          i || (a.variableList = i = {}), i[s] = e[s]
      } else a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`))
  }
  
  function de() {
      if (!(typeof self > "u")) return self.MediaSource || self.WebKitMediaSource
  }
  const jr = {
          audio: {
              a3ds: !0,
              "ac-3": !0,
              "ac-4": !0,
              alac: !0,
              alaw: !0,
              dra1: !0,
              "dts+": !0,
              "dts-": !0,
              dtsc: !0,
              dtse: !0,
              dtsh: !0,
              "ec-3": !0,
              enca: !0,
              g719: !0,
              g726: !0,
              m4ae: !0,
              mha1: !0,
              mha2: !0,
              mhm1: !0,
              mhm2: !0,
              mlpa: !0,
              mp4a: !0,
              "raw ": !0,
              Opus: !0,
              opus: !0,
              samr: !0,
              sawb: !0,
              sawp: !0,
              sevc: !0,
              sqcp: !0,
              ssmv: !0,
              twos: !0,
              ulaw: !0
          },
          video: {
              avc1: !0,
              avc2: !0,
              avc3: !0,
              avc4: !0,
              avcp: !0,
              av01: !0,
              drac: !0,
              dva1: !0,
              dvav: !0,
              dvh1: !0,
              dvhe: !0,
              encv: !0,
              hev1: !0,
              hvc1: !0,
              mjp2: !0,
              mp4v: !0,
              mvc1: !0,
              mvc2: !0,
              mvc3: !0,
              mvc4: !0,
              resv: !0,
              rv60: !0,
              s263: !0,
              svc1: !0,
              svc2: !0,
              "vc-1": !0,
              vp08: !0,
              vp09: !0
          },
          text: {
              stpp: !0,
              wvtt: !0
          }
      },
      ps = de();
  
  function Xr(a, t) {
      const e = jr[t];
      return !!e && e[a.slice(0, 4)] === !0
  }
  
  function ye(a, t) {
      var e;
      return (e = ps == null ? void 0 : ps.isTypeSupported(`${t||"video"}/mp4;codecs="${a}"`)) != null ? e : !1
  }
  const Ts = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
      ys = /#EXT-X-MEDIA:(.*)/g,
      zr = /^#EXT(?:INF|-X-TARGETDURATION):/m,
      xs = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
      Qr = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
  class yt {
      static findGroup(t, e) {
          for (let s = 0; s < t.length; s++) {
              const i = t[s];
              if (i.id === e) return i
          }
      }
      static convertAVC1ToAVCOTI(t) {
          const e = t.split(".");
          if (e.length > 2) {
              let s = e.shift() + ".";
              return s += parseInt(e.shift()).toString(16), s += ("000" + parseInt(e.shift()).toString(16)).slice(-4), s
          }
          return t
      }
      static resolve(t, e) {
          return qe.buildAbsoluteURL(e, t, {
              alwaysNormalize: !0
          })
      }
      static isMediaPlaylist(t) {
          return zr.test(t)
      }
      static parseMasterPlaylist(t, e) {
          const s = gs(t),
              i = {
                  contentSteering: null,
                  levels: [],
                  playlistParsingError: null,
                  sessionData: null,
                  sessionKeys: null,
                  startTimeOffset: null,
                  variableList: null,
                  hasVariableRefs: s
              },
              r = [];
          Ts.lastIndex = 0;
          let n;
          for (;
              (n = Ts.exec(t)) != null;)
              if (n[1]) {
                  var o;
                  const c = new Q(n[1]);
                  lt(i, c, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
                  const h = Ue(i, n[2]),
                      u = {
                          attrs: c,
                          bitrate: c.decimalInteger("AVERAGE-BANDWIDTH") || c.decimalInteger("BANDWIDTH"),
                          name: c.NAME,
                          url: yt.resolve(h, e)
                      },
                      d = c.decimalResolution("RESOLUTION");
                  d && (u.width = d.width, u.height = d.height), Jr((c.CODECS || "").split(/[ ,]+/).filter(f => f), u), u.videoCodec && u.videoCodec.indexOf("avc1") !== -1 && (u.videoCodec = yt.convertAVC1ToAVCOTI(u.videoCodec)), (o = u.unknownCodecs) != null && o.length || r.push(u), i.levels.push(u)
              } else if (n[3]) {
              const c = n[3],
                  h = n[4];
              switch (c) {
                  case "SESSION-DATA": {
                      const u = new Q(h);
                      lt(i, u, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
                      const d = u["DATA-ID"];
                      d && (i.sessionData === null && (i.sessionData = {}), i.sessionData[d] = u);
                      break
                  }
                  case "SESSION-KEY": {
                      const u = Es(h, e, i);
                      u.encrypted && u.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(u)) : x.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${h}"`);
                      break
                  }
                  case "DEFINE": {
                      {
                          const u = new Q(h);
                          lt(i, u, ["NAME", "VALUE", "QUERYPARAM"]), ms(i, u, e)
                      }
                      break
                  }
                  case "CONTENT-STEERING": {
                      const u = new Q(h);
                      lt(i, u, ["SERVER-URI", "PATHWAY-ID"]), i.contentSteering = {
                          uri: yt.resolve(u["SERVER-URI"], e),
                          pathwayId: u["PATHWAY-ID"] || "."
                      };
                      break
                  }
                  case "START": {
                      i.startTimeOffset = Ss(h);
                      break
                  }
              }
          }
          const l = r.length > 0 && r.length < i.levels.length;
          return i.levels = l ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i
      }
      static parseMasterPlaylistMedia(t, e, s) {
          let i;
          const r = {},
              n = s.levels,
              o = {
                  AUDIO: n.map(c => ({
                      id: c.attrs.AUDIO,
                      audioCodec: c.audioCodec
                  })),
                  SUBTITLES: n.map(c => ({
                      id: c.attrs.SUBTITLES,
                      textCodec: c.textCodec
                  })),
                  "CLOSED-CAPTIONS": []
              };
          let l = 0;
          for (ys.lastIndex = 0;
              (i = ys.exec(t)) !== null;) {
              const c = new Q(i[1]),
                  h = c.TYPE;
              if (h) {
                  const u = o[h],
                      d = r[h] || [];
                  r[h] = d, lt(s, c, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
                  const f = {
                      attrs: c,
                      bitrate: 0,
                      id: l++,
                      groupId: c["GROUP-ID"] || "",
                      instreamId: c["INSTREAM-ID"],
                      name: c.NAME || c.LANGUAGE || "",
                      type: h,
                      default: c.bool("DEFAULT"),
                      autoselect: c.bool("AUTOSELECT"),
                      forced: c.bool("FORCED"),
                      lang: c.LANGUAGE,
                      url: c.URI ? yt.resolve(c.URI, e) : ""
                  };
                  if (u != null && u.length) {
                      const g = yt.findGroup(u, f.groupId) || u[0];
                      vs(f, g, "audioCodec"), vs(f, g, "textCodec")
                  }
                  d.push(f)
              }
          }
          return r
      }
      static parseLevelPlaylist(t, e, s, i, r, n) {
          const o = new pr(e),
              l = o.fragments;
          let c = null,
              h = 0,
              u = 0,
              d = 0,
              f = 0,
              g = null,
              p = new ge(i, e),
              T, y, S, E = -1,
              R = !1;
          for (xs.lastIndex = 0, o.m3u8 = t, o.hasVariableRefs = gs(t);
              (T = xs.exec(t)) !== null;) {
              R && (R = !1, p = new ge(i, e), p.start = d, p.sn = h, p.cc = f, p.level = s, c && (p.initSegment = c, p.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null));
              const C = T[1];
              if (C) {
                  p.duration = parseFloat(C);
                  const k = (" " + T[2]).slice(1);
                  p.title = k || null, p.tagList.push(k ? ["INF", C, k] : ["INF", C])
              } else if (T[3]) {
                  if (F(p.duration)) {
                      p.start = d, S && Rs(p, S, o), p.sn = h, p.level = s, p.cc = f, p.urlId = r, l.push(p);
                      const k = (" " + T[3]).slice(1);
                      p.relurl = Ue(o, k), As(p, g), g = p, d += p.duration, h++, u = 0, R = !0
                  }
              } else if (T[4]) {
                  const k = (" " + T[4]).slice(1);
                  g ? p.setByteRange(k, g) : p.setByteRange(k)
              } else if (T[5]) p.rawProgramDateTime = (" " + T[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), E === -1 && (E = l.length);
              else {
                  if (T = T[0].match(Qr), !T) {
                      x.warn("No matches on slow regex match for level playlist!");
                      continue
                  }
                  for (y = 1; y < T.length && !(typeof T[y] < "u"); y++);
                  const k = (" " + T[y]).slice(1),
                      I = (" " + T[y + 1]).slice(1),
                      O = T[y + 2] ? (" " + T[y + 2]).slice(1) : "";
                  switch (k) {
                      case "PLAYLIST-TYPE":
                          o.type = I.toUpperCase();
                          break;
                      case "MEDIA-SEQUENCE":
                          h = o.startSN = parseInt(I);
                          break;
                      case "SKIP": {
                          const w = new Q(I);
                          lt(o, w, ["RECENTLY-REMOVED-DATERANGES"]);
                          const V = w.decimalInteger("SKIPPED-SEGMENTS");
                          if (F(V)) {
                              o.skippedSegments = V;
                              for (let j = V; j--;) l.unshift(null);
                              h += V
                          }
                          const nt = w.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                          nt && (o.recentlyRemovedDateranges = nt.split("	"));
                          break
                      }
                      case "TARGETDURATION":
                          o.targetduration = Math.max(parseInt(I), 1);
                          break;
                      case "VERSION":
                          o.version = parseInt(I);
                          break;
                      case "EXTM3U":
                          break;
                      case "ENDLIST":
                          o.live = !1;
                          break;
                      case "#":
                          (I || O) && p.tagList.push(O ? [I, O] : [I]);
                          break;
                      case "DISCONTINUITY":
                          f++, p.tagList.push(["DIS"]);
                          break;
                      case "GAP":
                          p.gap = !0, p.tagList.push([k]);
                          break;
                      case "BITRATE":
                          p.tagList.push([k, I]);
                          break;
                      case "DATERANGE": {
                          const w = new Q(I);
                          lt(o, w, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), lt(o, w, w.clientAttrs);
                          const V = new ni(w, o.dateRanges[w.ID]);
                          V.isValid || o.skippedSegments ? o.dateRanges[V.id] = V : x.warn(`Ignoring invalid DATERANGE tag: "${I}"`), p.tagList.push(["EXT-X-DATERANGE", I]);
                          break
                      }
                      case "DEFINE": {
                          {
                              const w = new Q(I);
                              lt(o, w, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in w ? qr(o, w, n) : ms(o, w, e)
                          }
                          break
                      }
                      case "DISCONTINUITY-SEQUENCE":
                          f = parseInt(I);
                          break;
                      case "KEY": {
                          const w = Es(I, e, o);
                          if (w.isSupported()) {
                              if (w.method === "NONE") {
                                  S = void 0;
                                  break
                              }
                              S || (S = {}), S[w.keyFormat] && (S = tt({}, S)), S[w.keyFormat] = w
                          } else x.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${I}"`);
                          break
                      }
                      case "START":
                          o.startTimeOffset = Ss(I);
                          break;
                      case "MAP": {
                          const w = new Q(I);
                          if (lt(o, w, ["BYTERANGE", "URI"]), p.duration) {
                              const V = new ge(i, e);
                              Ls(V, w, s, S), c = V, p.initSegment = c, c.rawProgramDateTime && !p.rawProgramDateTime && (p.rawProgramDateTime = c.rawProgramDateTime)
                          } else Ls(p, w, s, S), c = p, R = !0;
                          break
                      }
                      case "SERVER-CONTROL": {
                          const w = new Q(I);
                          o.canBlockReload = w.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = w.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && w.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = w.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = w.optionalFloat("HOLD-BACK", 0);
                          break
                      }
                      case "PART-INF": {
                          const w = new Q(I);
                          o.partTarget = w.decimalFloatingPoint("PART-TARGET");
                          break
                      }
                      case "PART": {
                          let w = o.partList;
                          w || (w = o.partList = []);
                          const V = u > 0 ? w[w.length - 1] : void 0,
                              nt = u++,
                              j = new Q(I);
                          lt(o, j, ["BYTERANGE", "URI"]);
                          const z = new gr(j, p, e, nt, V);
                          w.push(z), p.duration += z.duration;
                          break
                      }
                      case "PRELOAD-HINT": {
                          const w = new Q(I);
                          lt(o, w, ["URI"]), o.preloadHint = w;
                          break
                      }
                      case "RENDITION-REPORT": {
                          const w = new Q(I);
                          lt(o, w, ["URI"]), o.renditionReports = o.renditionReports || [], o.renditionReports.push(w);
                          break
                      }
                      default:
                          x.warn(`line parsed but not handled: ${T}`);
                          break
                  }
              }
          }
          g && !g.relurl ? (l.pop(), d -= g.duration, o.partList && (o.fragmentHint = g)) : o.partList && (As(p, g), p.cc = f, o.fragmentHint = p, S && Rs(p, S, o));
          const A = l.length,
              _ = l[0],
              D = l[A - 1];
          if (d += o.skippedSegments * o.targetduration, d > 0 && A && D) {
              o.averagetargetduration = d / A;
              const C = D.sn;
              o.endSN = C !== "initSegment" ? C : 0, o.live || (D.endList = !0), _ && (o.startCC = _.cc)
          } else o.endSN = 0, o.startCC = 0;
          return o.fragmentHint && (d += o.fragmentHint.duration), o.totalduration = d, o.endCC = f, E > 0 && Zr(l, E), o
      }
  }
  
  function Es(a, t, e) {
      var s, i;
      const r = new Q(a);
      lt(e, r, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
      const n = (s = r.METHOD) != null ? s : "",
          o = r.URI,
          l = r.hexadecimalInteger("IV"),
          c = r.KEYFORMATVERSIONS,
          h = (i = r.KEYFORMAT) != null ? i : "identity";
      o && r.IV && !l && x.error(`Invalid IV: ${r.IV}`);
      const u = o ? yt.resolve(o, t) : "",
          d = (c || "1").split("/").map(Number).filter(Number.isFinite);
      return new Vt(n, u, h, d, l)
  }
  
  function Ss(a) {
      const e = new Q(a).decimalFloatingPoint("TIME-OFFSET");
      return F(e) ? e : null
  }
  
  function Jr(a, t) {
      ["video", "audio", "text"].forEach(e => {
          const s = a.filter(i => Xr(i, e));
          if (s.length) {
              const i = s.filter(r => r.lastIndexOf("avc1", 0) === 0 || r.lastIndexOf("mp4a", 0) === 0);
              t[`${e}Codec`] = i.length > 0 ? i[0] : s[0], a = a.filter(r => s.indexOf(r) === -1)
          }
      }), t.unknownCodecs = a
  }
  
  function vs(a, t, e) {
      const s = t[e];
      s && (a[e] = s)
  }
  
  function Zr(a, t) {
      let e = a[t];
      for (let s = t; s--;) {
          const i = a[s];
          if (!i) return;
          i.programDateTime = e.programDateTime - i.duration * 1e3, e = i
      }
  }
  
  function As(a, t) {
      a.rawProgramDateTime ? a.programDateTime = Date.parse(a.rawProgramDateTime) : t != null && t.programDateTime && (a.programDateTime = t.endProgramDateTime), F(a.programDateTime) || (a.programDateTime = null, a.rawProgramDateTime = null)
  }
  
  function Ls(a, t, e, s) {
      a.relurl = t.URI, t.BYTERANGE && a.setByteRange(t.BYTERANGE), a.level = e, a.sn = "initSegment", s && (a.levelkeys = s), a.initSegment = null
  }
  
  function Rs(a, t, e) {
      a.levelkeys = t;
      const {
          encryptedFragments: s
      } = e;
      (!s.length || s[s.length - 1].levelkeys !== t) && Object.keys(t).some(i => t[i].isCommonEncryption) && s.push(a)
  }
  var G = {
          MANIFEST: "manifest",
          LEVEL: "level",
          AUDIO_TRACK: "audioTrack",
          SUBTITLE_TRACK: "subtitleTrack"
      },
      U = {
          MAIN: "main",
          AUDIO: "audio",
          SUBTITLE: "subtitle"
      };
  
  function Is(a) {
      const {
          type: t
      } = a;
      switch (t) {
          case G.AUDIO_TRACK:
              return U.AUDIO;
          case G.SUBTITLE_TRACK:
              return U.SUBTITLE;
          default:
              return U.MAIN
      }
  }
  
  function xe(a, t) {
      let e = a.url;
      return (e === void 0 || e.indexOf("data:") === 0) && (e = t.url), e
  }
  class tn {
      constructor(t) {
          this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = t, this.registerListeners()
      }
      startLoad(t) {}
      stopLoad() {
          this.destroyInternalLoaders()
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.LEVEL_LOADING, this.onLevelLoading, this), t.on(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
      }
      unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.LEVEL_LOADING, this.onLevelLoading, this), t.off(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
      }
      createInternalLoader(t) {
          const e = this.hls.config,
              s = e.pLoader,
              i = e.loader,
              r = s || i,
              n = new r(e);
          return this.loaders[t.type] = n, n
      }
      getInternalLoader(t) {
          return this.loaders[t.type]
      }
      resetInternalLoader(t) {
          this.loaders[t] && delete this.loaders[t]
      }
      destroyInternalLoaders() {
          for (const t in this.loaders) {
              const e = this.loaders[t];
              e && e.destroy(), this.resetInternalLoader(t)
          }
      }
      destroy() {
          this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders()
      }
      onManifestLoading(t, e) {
          const {
              url: s
          } = e;
          this.variableList = null, this.load({
              id: null,
              level: 0,
              responseType: "text",
              type: G.MANIFEST,
              url: s,
              deliveryDirectives: null
          })
      }
      onLevelLoading(t, e) {
          const {
              id: s,
              level: i,
              url: r,
              deliveryDirectives: n
          } = e;
          this.load({
              id: s,
              level: i,
              responseType: "text",
              type: G.LEVEL,
              url: r,
              deliveryDirectives: n
          })
      }
      onAudioTrackLoading(t, e) {
          const {
              id: s,
              groupId: i,
              url: r,
              deliveryDirectives: n
          } = e;
          this.load({
              id: s,
              groupId: i,
              level: null,
              responseType: "text",
              type: G.AUDIO_TRACK,
              url: r,
              deliveryDirectives: n
          })
      }
      onSubtitleTrackLoading(t, e) {
          const {
              id: s,
              groupId: i,
              url: r,
              deliveryDirectives: n
          } = e;
          this.load({
              id: s,
              groupId: i,
              level: null,
              responseType: "text",
              type: G.SUBTITLE_TRACK,
              url: r,
              deliveryDirectives: n
          })
      }
      load(t) {
          var e;
          const s = this.hls.config;
          let i = this.getInternalLoader(t);
          if (i) {
              const c = i.context;
              if (c && c.url === t.url) {
                  x.trace("[playlist-loader]: playlist request ongoing");
                  return
              }
              x.log(`[playlist-loader]: aborting previous loader for type: ${t.type}`), i.abort()
          }
          let r;
          if (t.type === G.MANIFEST ? r = s.manifestLoadPolicy.default : r = tt({}, s.playlistLoadPolicy.default, {
                  timeoutRetry: null,
                  errorRetry: null
              }), i = this.createInternalLoader(t), (e = t.deliveryDirectives) != null && e.part) {
              let c;
              if (t.type === G.LEVEL && t.level !== null ? c = this.hls.levels[t.level].details : t.type === G.AUDIO_TRACK && t.id !== null ? c = this.hls.audioTracks[t.id].details : t.type === G.SUBTITLE_TRACK && t.id !== null && (c = this.hls.subtitleTracks[t.id].details), c) {
                  const h = c.partTarget,
                      u = c.targetduration;
                  if (h && u) {
                      const d = Math.max(h * 3, u * .8) * 1e3;
                      r = tt({}, r, {
                          maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
                          maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
                      })
                  }
              }
          }
          const n = r.errorRetry || r.timeoutRetry || {},
              o = {
                  loadPolicy: r,
                  timeout: r.maxLoadTimeMs,
                  maxRetry: n.maxNumRetry || 0,
                  retryDelay: n.retryDelayMs || 0,
                  maxRetryDelay: n.maxRetryDelayMs || 0
              },
              l = {
                  onSuccess: (c, h, u, d) => {
                      const f = this.getInternalLoader(u);
                      this.resetInternalLoader(u.type);
                      const g = c.data;
                      if (g.indexOf("#EXTM3U") !== 0) {
                          this.handleManifestParsingError(c, u, new Error("no EXTM3U delimiter"), d || null, h);
                          return
                      }
                      h.parsing.start = performance.now(), yt.isMediaPlaylist(g) ? this.handleTrackOrLevelPlaylist(c, h, u, d || null, f) : this.handleMasterPlaylist(c, h, u, d)
                  },
                  onError: (c, h, u, d) => {
                      this.handleNetworkError(h, u, !1, c, d)
                  },
                  onTimeout: (c, h, u) => {
                      this.handleNetworkError(h, u, !0, void 0, c)
                  }
              };
          i.load(t, o, l)
      }
      handleMasterPlaylist(t, e, s, i) {
          const r = this.hls,
              n = t.data,
              o = xe(t, s),
              l = yt.parseMasterPlaylist(n, o);
          if (l.playlistParsingError) {
              this.handleManifestParsingError(t, s, l.playlistParsingError, i, e);
              return
          }
          const {
              contentSteering: c,
              levels: h,
              sessionData: u,
              sessionKeys: d,
              startTimeOffset: f,
              variableList: g
          } = l;
          this.variableList = g;
          const {
              AUDIO: p = [],
              SUBTITLES: T,
              "CLOSED-CAPTIONS": y
          } = yt.parseMasterPlaylistMedia(n, o, l);
          p.length && !p.some(E => !E.url) && h[0].audioCodec && !h[0].attrs.AUDIO && (x.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
              type: "main",
              name: "main",
              groupId: "main",
              default: !1,
              autoselect: !1,
              forced: !1,
              id: -1,
              attrs: new Q({}),
              bitrate: 0,
              url: ""
          })), r.trigger(m.MANIFEST_LOADED, {
              levels: h,
              audioTracks: p,
              subtitles: T,
              captions: y,
              contentSteering: c,
              url: o,
              stats: e,
              networkDetails: i,
              sessionData: u,
              sessionKeys: d,
              startTimeOffset: f,
              variableList: g
          })
      }
      handleTrackOrLevelPlaylist(t, e, s, i, r) {
          const n = this.hls,
              {
                  id: o,
                  level: l,
                  type: c
              } = s,
              h = xe(t, s),
              u = F(o) ? o : 0,
              d = F(l) ? l : u,
              f = Is(s),
              g = yt.parseLevelPlaylist(t.data, h, d, f, u, this.variableList);
          if (c === G.MANIFEST) {
              const p = {
                  attrs: new Q({}),
                  bitrate: 0,
                  details: g,
                  name: "",
                  url: h
              };
              n.trigger(m.MANIFEST_LOADED, {
                  levels: [p],
                  audioTracks: [],
                  url: h,
                  stats: e,
                  networkDetails: i,
                  sessionData: null,
                  sessionKeys: null,
                  contentSteering: null,
                  startTimeOffset: null,
                  variableList: null
              })
          }
          e.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, t, e, s, i, r)
      }
      handleManifestParsingError(t, e, s, i, r) {
          this.hls.trigger(m.ERROR, {
              type: N.NETWORK_ERROR,
              details: L.MANIFEST_PARSING_ERROR,
              fatal: e.type === G.MANIFEST,
              url: t.url,
              err: s,
              error: s,
              reason: s.message,
              response: t,
              context: e,
              networkDetails: i,
              stats: r
          })
      }
      handleNetworkError(t, e, s = !1, i, r) {
          let n = `A network ${s?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${t.type}`;
          t.type === G.LEVEL ? n += `: ${t.level} id: ${t.id}` : (t.type === G.AUDIO_TRACK || t.type === G.SUBTITLE_TRACK) && (n += ` id: ${t.id} group-id: "${t.groupId}"`);
          const o = new Error(n);
          x.warn(`[playlist-loader]: ${n}`);
          let l = L.UNKNOWN,
              c = !1;
          const h = this.getInternalLoader(t);
          switch (t.type) {
              case G.MANIFEST:
                  l = s ? L.MANIFEST_LOAD_TIMEOUT : L.MANIFEST_LOAD_ERROR, c = !0;
                  break;
              case G.LEVEL:
                  l = s ? L.LEVEL_LOAD_TIMEOUT : L.LEVEL_LOAD_ERROR, c = !1;
                  break;
              case G.AUDIO_TRACK:
                  l = s ? L.AUDIO_TRACK_LOAD_TIMEOUT : L.AUDIO_TRACK_LOAD_ERROR, c = !1;
                  break;
              case G.SUBTITLE_TRACK:
                  l = s ? L.SUBTITLE_TRACK_LOAD_TIMEOUT : L.SUBTITLE_LOAD_ERROR, c = !1;
                  break
          }
          h && this.resetInternalLoader(t.type);
          const u = {
              type: N.NETWORK_ERROR,
              details: l,
              fatal: c,
              url: t.url,
              loader: h,
              context: t,
              error: o,
              networkDetails: e,
              stats: r
          };
          if (i) {
              const d = (e == null ? void 0 : e.url) || t.url;
              u.response = at({
                  url: d,
                  data: void 0
              }, i)
          }
          this.hls.trigger(m.ERROR, u)
      }
      handlePlaylistLoaded(t, e, s, i, r, n) {
          const o = this.hls,
              {
                  type: l,
                  level: c,
                  id: h,
                  groupId: u,
                  deliveryDirectives: d
              } = i,
              f = xe(e, i),
              g = Is(i),
              p = typeof i.level == "number" && g === U.MAIN ? c : void 0;
          if (!t.fragments.length) {
              const y = new Error("No Segments found in Playlist");
              o.trigger(m.ERROR, {
                  type: N.NETWORK_ERROR,
                  details: L.LEVEL_EMPTY_ERROR,
                  fatal: !1,
                  url: f,
                  error: y,
                  reason: y.message,
                  response: e,
                  context: i,
                  level: p,
                  parent: g,
                  networkDetails: r,
                  stats: s
              });
              return
          }
          t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
          const T = t.playlistParsingError;
          if (T) {
              o.trigger(m.ERROR, {
                  type: N.NETWORK_ERROR,
                  details: L.LEVEL_PARSING_ERROR,
                  fatal: !1,
                  url: f,
                  error: T,
                  reason: T.message,
                  response: e,
                  context: i,
                  level: p,
                  parent: g,
                  networkDetails: r,
                  stats: s
              });
              return
          }
          switch (t.live && n && (n.getCacheAge && (t.ageHeader = n.getCacheAge() || 0), (!n.getCacheAge || isNaN(t.ageHeader)) && (t.ageHeader = 0)), l) {
              case G.MANIFEST:
              case G.LEVEL:
                  o.trigger(m.LEVEL_LOADED, {
                      details: t,
                      level: p || 0,
                      id: h || 0,
                      stats: s,
                      networkDetails: r,
                      deliveryDirectives: d
                  });
                  break;
              case G.AUDIO_TRACK:
                  o.trigger(m.AUDIO_TRACK_LOADED, {
                      details: t,
                      id: h || 0,
                      groupId: u || "",
                      stats: s,
                      networkDetails: r,
                      deliveryDirectives: d
                  });
                  break;
              case G.SUBTITLE_TRACK:
                  o.trigger(m.SUBTITLE_TRACK_LOADED, {
                      details: t,
                      id: h || 0,
                      groupId: u || "",
                      stats: s,
                      networkDetails: r,
                      deliveryDirectives: d
                  });
                  break
          }
      }
  }
  
  function Si(a, t) {
      let e;
      try {
          e = new Event("addtrack")
      } catch {
          e = document.createEvent("Event"), e.initEvent("addtrack", !1, !1)
      }
      e.track = a, t.dispatchEvent(e)
  }
  
  function vi(a, t) {
      const e = a.mode;
      if (e === "disabled" && (a.mode = "hidden"), a.cues && !a.cues.getCueById(t.id)) try {
          if (a.addCue(t), !a.cues.getCueById(t.id)) throw new Error(`addCue is failed for: ${t}`)
      } catch (s) {
          x.debug(`[texttrack-utils]: ${s}`);
          try {
              const i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
              i.id = t.id, a.addCue(i)
          } catch (i) {
              x.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)
          }
      }
      e === "disabled" && (a.mode = e)
  }
  
  function Nt(a) {
      const t = a.mode;
      if (t === "disabled" && (a.mode = "hidden"), a.cues)
          for (let e = a.cues.length; e--;) a.removeCue(a.cues[e]);
      t === "disabled" && (a.mode = t)
  }
  
  function Be(a, t, e, s) {
      const i = a.mode;
      if (i === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0) {
          const r = sn(a.cues, t, e);
          for (let n = 0; n < r.length; n++)(!s || s(r[n])) && a.removeCue(r[n])
      }
      i === "disabled" && (a.mode = i)
  }
  
  function en(a, t) {
      if (t < a[0].startTime) return 0;
      const e = a.length - 1;
      if (t > a[e].endTime) return -1;
      let s = 0,
          i = e;
      for (; s <= i;) {
          const r = Math.floor((i + s) / 2);
          if (t < a[r].startTime) i = r - 1;
          else if (t > a[r].startTime && s < e) s = r + 1;
          else return r
      }
      return a[s].startTime - t < t - a[i].startTime ? s : i
  }
  
  function sn(a, t, e) {
      const s = [],
          i = en(a, t);
      if (i > -1)
          for (let r = i, n = a.length; r < n; r++) {
              const o = a[r];
              if (o.startTime >= t && o.endTime <= e) s.push(o);
              else if (o.startTime > e) return s
          }
      return s
  }
  var Tt = {
      audioId3: "org.id3",
      dateRange: "com.apple.quicktime.HLS",
      emsg: "https://aomedia.org/emsg/ID3"
  };
  const rn = .25;
  
  function $e() {
      if (!(typeof self > "u")) return self.VTTCue || self.TextTrackCue
  }
  
  function bs(a, t, e, s, i) {
      let r = new a(t, e, "");
      try {
          r.value = s, i && (r.type = i)
      } catch {
          r = new a(t, e, JSON.stringify(i ? at({
              type: i
          }, s) : s))
      }
      return r
  }
  const jt = (() => {
      const a = $e();
      try {
          a && new a(0, Number.POSITIVE_INFINITY, "")
      } catch {
          return Number.MAX_VALUE
      }
      return Number.POSITIVE_INFINITY
  })();
  
  function Ee(a, t) {
      return a.getTime() / 1e3 - t
  }
  
  function nn(a) {
      return Uint8Array.from(a.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer
  }
  class an {
      constructor(t) {
          this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners()
      }
      destroy() {
          this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(m.LEVEL_UPDATED, this.onLevelUpdated, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(m.LEVEL_UPDATED, this.onLevelUpdated, this)
      }
      onMediaAttached(t, e) {
          this.media = e.media
      }
      onMediaDetaching() {
          this.id3Track && (Nt(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {})
      }
      onManifestLoading() {
          this.dateRangeCuesAppended = {}
      }
      createTrack(t) {
          const e = this.getID3Track(t.textTracks);
          return e.mode = "hidden", e
      }
      getID3Track(t) {
          if (this.media) {
              for (let e = 0; e < t.length; e++) {
                  const s = t[e];
                  if (s.kind === "metadata" && s.label === "id3") return Si(s, this.media), s
              }
              return this.media.addTextTrack("metadata", "id3")
          }
      }
      onFragParsingMetadata(t, e) {
          if (!this.media) return;
          const {
              hls: {
                  config: {
                      enableEmsgMetadataCues: s,
                      enableID3MetadataCues: i
                  }
              }
          } = this;
          if (!s && !i) return;
          const {
              samples: r
          } = e;
          this.id3Track || (this.id3Track = this.createTrack(this.media));
          const n = $e();
          if (n)
              for (let o = 0; o < r.length; o++) {
                  const l = r[o].type;
                  if (l === Tt.emsg && !s || !i) continue;
                  const c = di(r[o].data);
                  if (c) {
                      const h = r[o].pts;
                      let u = h + r[o].duration;
                      u > jt && (u = jt), u - h <= 0 && (u = h + rn);
                      for (let f = 0; f < c.length; f++) {
                          const g = c[f];
                          if (!ui(g)) {
                              this.updateId3CueEnds(h, l);
                              const p = bs(n, h, u, g, l);
                              p && this.id3Track.addCue(p)
                          }
                      }
                  }
              }
      }
      updateId3CueEnds(t, e) {
          var s;
          const i = (s = this.id3Track) == null ? void 0 : s.cues;
          if (i)
              for (let r = i.length; r--;) {
                  const n = i[r];
                  n.type === e && n.startTime < t && n.endTime === jt && (n.endTime = t)
              }
      }
      onBufferFlushing(t, {
          startOffset: e,
          endOffset: s,
          type: i
      }) {
          const {
              id3Track: r,
              hls: n
          } = this;
          if (!n) return;
          const {
              config: {
                  enableEmsgMetadataCues: o,
                  enableID3MetadataCues: l
              }
          } = n;
          if (r && (o || l)) {
              let c;
              i === "audio" ? c = h => h.type === Tt.audioId3 && l : i === "video" ? c = h => h.type === Tt.emsg && o : c = h => h.type === Tt.audioId3 && l || h.type === Tt.emsg && o, Be(r, e, s, c)
          }
      }
      onLevelUpdated(t, {
          details: e
      }) {
          if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues) return;
          const {
              dateRangeCuesAppended: s,
              id3Track: i
          } = this, {
              dateRanges: r
          } = e, n = Object.keys(r);
          if (i) {
              const h = Object.keys(s).filter(u => !n.includes(u));
              for (let u = h.length; u--;) {
                  const d = h[u];
                  Object.keys(s[d].cues).forEach(f => {
                      i.removeCue(s[d].cues[f])
                  }), delete s[d]
              }
          }
          const o = e.fragments[e.fragments.length - 1];
          if (n.length === 0 || !F(o == null ? void 0 : o.programDateTime)) return;
          this.id3Track || (this.id3Track = this.createTrack(this.media));
          const l = o.programDateTime / 1e3 - o.start,
              c = $e();
          for (let h = 0; h < n.length; h++) {
              const u = n[h],
                  d = r[u],
                  f = s[u],
                  g = (f == null ? void 0 : f.cues) || {};
              let p = (f == null ? void 0 : f.durationKnown) || !1;
              const T = Ee(d.startDate, l);
              let y = jt;
              const S = d.endDate;
              if (S) y = Ee(S, l), p = !0;
              else if (d.endOnNext && !p) {
                  const R = n.reduce((A, _) => {
                      const D = r[_];
                      return D.class === d.class && D.id !== _ && D.startDate > d.startDate && A.push(D), A
                  }, []).sort((A, _) => A.startDate.getTime() - _.startDate.getTime())[0];
                  R && (y = Ee(R.startDate, l), p = !0)
              }
              const E = Object.keys(d.attr);
              for (let R = 0; R < E.length; R++) {
                  const A = E[R];
                  if (!dr(A)) continue;
                  const _ = g[A];
                  if (_) p && !f.durationKnown && (_.endTime = y);
                  else if (c) {
                      let D = d.attr[A];
                      fr(A) && (D = nn(D));
                      const C = bs(c, T, y, {
                          key: A,
                          data: D
                      }, Tt.dateRange);
                      C && (C.id = u, this.id3Track.addCue(C), g[A] = C)
                  }
              }
              s[u] = {
                  cues: g,
                  dateRange: d,
                  durationKnown: p
              }
          }
      }
  }
  class on {
      constructor(t) {
          this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = t, this.config = t.config, this.registerListeners()
      }
      get latency() {
          return this._latency || 0
      }
      get maxLatency() {
          const {
              config: t,
              levelDetails: e
          } = this;
          return t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
      }
      get targetLatency() {
          const {
              levelDetails: t
          } = this;
          if (t === null) return null;
          const {
              holdBack: e,
              partHoldBack: s,
              targetduration: i
          } = t, {
              liveSyncDuration: r,
              liveSyncDurationCount: n,
              lowLatencyMode: o
          } = this.config, l = this.hls.userConfig;
          let c = o && s || e;
          (l.liveSyncDuration || l.liveSyncDurationCount || c === 0) && (c = r !== void 0 ? r : n * i);
          const h = i,
              u = 1;
          return c + Math.min(this.stallCount * u, h)
      }
      get liveSyncPosition() {
          const t = this.estimateLiveEdge(),
              e = this.targetLatency,
              s = this.levelDetails;
          if (t === null || e === null || s === null) return null;
          const i = s.edge,
              r = t - e - this.edgeStalled,
              n = i - s.totalduration,
              o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
          return Math.min(Math.max(n, r), o)
      }
      get drift() {
          const {
              levelDetails: t
          } = this;
          return t === null ? 1 : t.drift
      }
      get edgeStalled() {
          const {
              levelDetails: t
          } = this;
          if (t === null) return 0;
          const e = (this.config.lowLatencyMode && t.partTarget || t.targetduration) * 3;
          return Math.max(t.age - e, 0)
      }
      get forwardBufferLength() {
          const {
              media: t,
              levelDetails: e
          } = this;
          if (!t || !e) return 0;
          const s = t.buffered.length;
          return (s ? t.buffered.end(s - 1) : e.edge) - this.currentTime
      }
      destroy() {
          this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
      }
      registerListeners() {
          this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(m.ERROR, this.onError, this)
      }
      unregisterListeners() {
          this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(m.ERROR, this.onError, this)
      }
      onMediaAttached(t, e) {
          this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
      }
      onMediaDetaching() {
          this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
      }
      onManifestLoading() {
          this.levelDetails = null, this._latency = null, this.stallCount = 0
      }
      onLevelUpdated(t, {
          details: e
      }) {
          this.levelDetails = e, e.advanced && this.timeupdate(), !e.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
      }
      onError(t, e) {
          var s;
          e.details === L.BUFFER_STALLED_ERROR && (this.stallCount++, (s = this.levelDetails) != null && s.live && x.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
      }
      timeupdate() {
          const {
              media: t,
              levelDetails: e
          } = this;
          if (!t || !e) return;
          this.currentTime = t.currentTime;
          const s = this.computeLatency();
          if (s === null) return;
          this._latency = s;
          const {
              lowLatencyMode: i,
              maxLiveSyncPlaybackRate: r
          } = this.config;
          if (!i || r === 1) return;
          const n = this.targetLatency;
          if (n === null) return;
          const o = s - n,
              l = Math.min(this.maxLatency, n + e.targetduration),
              c = o < l;
          if (e.live && c && o > .05 && this.forwardBufferLength > 1) {
              const h = Math.min(2, Math.max(1, r)),
                  u = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
              t.playbackRate = Math.min(h, Math.max(1, u))
          } else t.playbackRate !== 1 && t.playbackRate !== 0 && (t.playbackRate = 1)
      }
      estimateLiveEdge() {
          const {
              levelDetails: t
          } = this;
          return t === null ? null : t.edge + t.age
      }
      computeLatency() {
          const t = this.estimateLiveEdge();
          return t === null ? null : t - this.currentTime
      }
  }
  const Ge = ["NONE", "TYPE-0", "TYPE-1", null];
  var Ht = {
      No: "",
      Yes: "YES",
      v2: "v2"
  };
  
  function ln(a, t) {
      const {
          canSkipUntil: e,
          canSkipDateRanges: s,
          endSN: i
      } = a, r = t !== void 0 ? t - i : 0;
      return e && r < e ? s ? Ht.v2 : Ht.Yes : Ht.No
  }
  class Ds {
      constructor(t, e, s) {
          this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = s
      }
      addDirectives(t) {
          const e = new self.URL(t);
          return this.msn !== void 0 && e.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.href
      }
  }
  class Wt {
      constructor(t) {
          this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter(e => e).join(",").replace(/\.[^.,]+/g, "")
      }
      get maxBitrate() {
          return Math.max(this.realBitrate, this.bitrate)
      }
      get attrs() {
          return this._attrs[this._urlId]
      }
      get pathwayId() {
          return this.attrs["PATHWAY-ID"] || "."
      }
      get uri() {
          return this.url[this._urlId] || ""
      }
      get urlId() {
          return this._urlId
      }
      set urlId(t) {
          const e = t % this.url.length;
          this._urlId !== e && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = e)
      }
      get audioGroupId() {
          var t;
          return (t = this.audioGroupIds) == null ? void 0 : t[this.urlId]
      }
      get textGroupId() {
          var t;
          return (t = this.textGroupIds) == null ? void 0 : t[this.urlId]
      }
      addFallback(t) {
          this.url.push(t.url), this._attrs.push(t.attrs)
      }
  }
  
  function Se(a, t) {
      const e = t.startPTS;
      if (F(e)) {
          let s = 0,
              i;
          t.sn > a.sn ? (s = e - a.start, i = a) : (s = a.start - e, i = t), i.duration !== s && (i.duration = s)
      } else t.sn > a.sn ? a.cc === t.cc && a.minEndPTS ? t.start = a.start + (a.minEndPTS - a.start) : t.start = a.start + a.duration : t.start = Math.max(a.start - t.duration, 0)
  }
  
  function Ai(a, t, e, s, i, r) {
      s - e <= 0 && (x.warn("Fragment should have a positive duration", t), s = e + t.duration, r = i + t.duration);
      let o = e,
          l = s;
      const c = t.startPTS,
          h = t.endPTS;
      if (F(c)) {
          const T = Math.abs(c - e);
          F(t.deltaPTS) ? t.deltaPTS = Math.max(T, t.deltaPTS) : t.deltaPTS = T, o = Math.max(e, c), e = Math.min(e, c), i = Math.min(i, t.startDTS), l = Math.min(s, h), s = Math.max(s, h), r = Math.max(r, t.endDTS)
      }
      const u = e - t.start;
      t.start !== 0 && (t.start = e), t.duration = s - t.start, t.startPTS = e, t.maxStartPTS = o, t.startDTS = i, t.endPTS = s, t.minEndPTS = l, t.endDTS = r;
      const d = t.sn;
      if (!a || d < a.startSN || d > a.endSN) return 0;
      let f;
      const g = d - a.startSN,
          p = a.fragments;
      for (p[g] = t, f = g; f > 0; f--) Se(p[f], p[f - 1]);
      for (f = g; f < p.length - 1; f++) Se(p[f], p[f + 1]);
      return a.fragmentHint && Se(p[p.length - 1], a.fragmentHint), a.PTSKnown = a.alignedSliding = !0, u
  }
  
  function cn(a, t) {
      let e = null;
      const s = a.fragments;
      for (let l = s.length - 1; l >= 0; l--) {
          const c = s[l].initSegment;
          if (c) {
              e = c;
              break
          }
      }
      a.fragmentHint && delete a.fragmentHint.endPTS;
      let i = 0,
          r;
      if (dn(a, t, (l, c) => {
              l.relurl && (i = l.cc - c.cc), F(l.startPTS) && F(l.endPTS) && (c.start = c.startPTS = l.startPTS, c.startDTS = l.startDTS, c.maxStartPTS = l.maxStartPTS, c.endPTS = l.endPTS, c.endDTS = l.endDTS, c.minEndPTS = l.minEndPTS, c.duration = l.endPTS - l.startPTS, c.duration && (r = c), t.PTSKnown = t.alignedSliding = !0), c.elementaryStreams = l.elementaryStreams, c.loader = l.loader, c.stats = l.stats, c.urlId = l.urlId, l.initSegment && (c.initSegment = l.initSegment, e = l.initSegment)
          }), e && (t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments).forEach(c => {
              var h;
              (!c.initSegment || c.initSegment.relurl === ((h = e) == null ? void 0 : h.relurl)) && (c.initSegment = e)
          }), t.skippedSegments)
          if (t.deltaUpdateFailed = t.fragments.some(l => !l), t.deltaUpdateFailed) {
              x.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
              for (let l = t.skippedSegments; l--;) t.fragments.shift();
              t.startSN = t.fragments[0].sn, t.startCC = t.fragments[0].cc
          } else t.canSkipDateRanges && (t.dateRanges = hn(a.dateRanges, t.dateRanges, t.recentlyRemovedDateranges));
      const n = t.fragments;
      if (i) {
          x.warn("discontinuity sliding from playlist, take drift into account");
          for (let l = 0; l < n.length; l++) n[l].cc += i
      }
      t.skippedSegments && (t.startCC = t.fragments[0].cc), un(a.partList, t.partList, (l, c) => {
          c.elementaryStreams = l.elementaryStreams, c.stats = l.stats
      }), r ? Ai(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : Li(a, t), n.length && (t.totalduration = t.edge - n[0].start), t.driftStartTime = a.driftStartTime, t.driftStart = a.driftStart;
      const o = t.advancedDateTime;
      if (t.advanced && o) {
          const l = t.edge;
          t.driftStart || (t.driftStartTime = o, t.driftStart = l), t.driftEndTime = o, t.driftEnd = l
      } else t.driftEndTime = a.driftEndTime, t.driftEnd = a.driftEnd, t.advancedDateTime = a.advancedDateTime
  }
  
  function hn(a, t, e) {
      const s = tt({}, a);
      return e && e.forEach(i => {
          delete s[i]
      }), Object.keys(t).forEach(i => {
          const r = new ni(t[i].attr, s[i]);
          r.isValid ? s[i] = r : x.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(t[i].attr)}"`)
      }), s
  }
  
  function un(a, t, e) {
      if (a && t) {
          let s = 0;
          for (let i = 0, r = a.length; i <= r; i++) {
              const n = a[i],
                  o = t[i + s];
              n && o && n.index === o.index && n.fragment.sn === o.fragment.sn ? e(n, o) : s--
          }
      }
  }
  
  function dn(a, t, e) {
      const s = t.skippedSegments,
          i = Math.max(a.startSN, t.startSN) - t.startSN,
          r = (a.fragmentHint ? 1 : 0) + (s ? t.endSN : Math.min(a.endSN, t.endSN)) - t.startSN,
          n = t.startSN - a.startSN,
          o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
          l = a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments;
      for (let c = i; c <= r; c++) {
          const h = l[n + c];
          let u = o[c];
          s && !u && c < s && (u = t.fragments[c] = h), h && u && e(h, u)
      }
  }
  
  function Li(a, t) {
      const e = t.startSN + t.skippedSegments - a.startSN,
          s = a.fragments;
      e < 0 || e >= s.length || Ke(t, s[e].start)
  }
  
  function Ke(a, t) {
      if (t) {
          const e = a.fragments;
          for (let s = a.skippedSegments; s < e.length; s++) e[s].start += t;
          a.fragmentHint && (a.fragmentHint.start += t)
      }
  }
  
  function fn(a, t = 1 / 0) {
      let e = 1e3 * a.targetduration;
      if (a.updated) {
          const s = a.fragments,
              i = 4;
          if (s.length && e * i > t) {
              const r = s[s.length - 1].duration * 1e3;
              r < e && (e = r)
          }
      } else e /= 2;
      return Math.round(e)
  }
  
  function gn(a, t, e) {
      if (!(a != null && a.details)) return null;
      const s = a.details;
      let i = s.fragments[t - s.startSN];
      return i || (i = s.fragmentHint, i && i.sn === t) ? i : t < s.startSN && e && e.sn === t ? e : null
  }
  
  function Cs(a, t, e) {
      var s;
      return a != null && a.details ? Ri((s = a.details) == null ? void 0 : s.partList, t, e) : null
  }
  
  function Ri(a, t, e) {
      if (a)
          for (let s = a.length; s--;) {
              const i = a[s];
              if (i.index === e && i.fragment.sn === t) return i
          }
      return null
  }
  
  function ae(a) {
      switch (a.details) {
          case L.FRAG_LOAD_TIMEOUT:
          case L.KEY_LOAD_TIMEOUT:
          case L.LEVEL_LOAD_TIMEOUT:
          case L.MANIFEST_LOAD_TIMEOUT:
              return !0
      }
      return !1
  }
  
  function ks(a, t) {
      const e = ae(t);
      return a.default[`${e?"timeout":"error"}Retry`]
  }
  
  function ze(a, t) {
      const e = a.backoff === "linear" ? 1 : Math.pow(2, t);
      return Math.min(e * a.retryDelayMs, a.maxRetryDelayMs)
  }
  
  function _s(a) {
      return at(at({}, a), {
          errorRetry: null,
          timeoutRetry: null
      })
  }
  
  function oe(a, t, e, s) {
      return !!a && t < a.maxNumRetry && (mn(s) || !!e)
  }
  
  function mn(a) {
      return a === 0 && navigator.onLine === !1 || !!a && (a < 400 || a > 499)
  }
  const Ii = {
      search: function(a, t) {
          let e = 0,
              s = a.length - 1,
              i = null,
              r = null;
          for (; e <= s;) {
              i = (e + s) / 2 | 0, r = a[i];
              const n = t(r);
              if (n > 0) e = i + 1;
              else if (n < 0) s = i - 1;
              else return r
          }
          return null
      }
  };
  
  function pn(a, t, e) {
      if (t === null || !Array.isArray(a) || !a.length || !F(t)) return null;
      const s = a[0].programDateTime;
      if (t < (s || 0)) return null;
      const i = a[a.length - 1].endProgramDateTime;
      if (t >= (i || 0)) return null;
      e = e || 0;
      for (let r = 0; r < a.length; ++r) {
          const n = a[r];
          if (Tn(t, e, n)) return n
      }
      return null
  }
  
  function Yt(a, t, e = 0, s = 0) {
      let i = null;
      if (a ? i = t[a.sn - t[0].sn + 1] || null : e === 0 && t[0].start === 0 && (i = t[0]), i && He(e, s, i) === 0) return i;
      const r = Ii.search(t, He.bind(null, e, s));
      return r && (r !== a || !i) ? r : i
  }
  
  function He(a = 0, t = 0, e) {
      if (e.start <= a && e.start + e.duration > a) return 0;
      const s = Math.min(t, e.duration + (e.deltaPTS ? e.deltaPTS : 0));
      return e.start + e.duration - s <= a ? 1 : e.start - s > a && e.start ? -1 : 0
  }
  
  function Tn(a, t, e) {
      const s = Math.min(t, e.duration + (e.deltaPTS ? e.deltaPTS : 0)) * 1e3;
      return (e.endProgramDateTime || 0) - s > a
  }
  
  function yn(a, t) {
      return Ii.search(a, e => e.cc < t ? 1 : e.cc > t ? -1 : 0)
  }
  const xn = 3e5;
  var rt = {
          DoNothing: 0,
          SendEndCallback: 1,
          SendAlternateToPenaltyBox: 2,
          RemoveAlternatePermanently: 3,
          InsertDiscontinuity: 4,
          RetryRequest: 5
      },
      ft = {
          None: 0,
          MoveAllAlternatesMatchingHost: 1,
          MoveAllAlternatesMatchingHDCP: 2,
          SwitchToSDR: 4
      };
  class En {
      constructor(t) {
          this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t, this.log = x.log.bind(x, "[info]:"), this.warn = x.warn.bind(x, "[warning]:"), this.error = x.error.bind(x, "[error]:"), this.registerListeners()
      }
      registerListeners() {
          const t = this.hls;
          t.on(m.ERROR, this.onError, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.LEVEL_UPDATED, this.onLevelUpdated, this)
      }
      unregisterListeners() {
          const t = this.hls;
          t && (t.off(m.ERROR, this.onError, this), t.off(m.ERROR, this.onErrorOut, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.LEVEL_UPDATED, this.onLevelUpdated, this))
      }
      destroy() {
          this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {}
      }
      startLoad(t) {
          this.playlistError = 0
      }
      stopLoad() {}
      getVariantLevelIndex(t) {
          return (t == null ? void 0 : t.type) === U.MAIN ? t.level : this.hls.loadLevel
      }
      onManifestLoading() {
          this.playlistError = 0, this.penalizedRenditions = {}
      }
      onLevelUpdated() {
          this.playlistError = 0
      }
      onError(t, e) {
          var s, i;
          if (e.fatal) return;
          const r = this.hls,
              n = e.context;
          switch (e.details) {
              case L.FRAG_LOAD_ERROR:
              case L.FRAG_LOAD_TIMEOUT:
              case L.KEY_LOAD_ERROR:
              case L.KEY_LOAD_TIMEOUT:
                  e.errorAction = this.getFragRetryOrSwitchAction(e);
                  return;
              case L.FRAG_PARSING_ERROR:
                  if ((s = e.frag) != null && s.gap) {
                      e.errorAction = {
                          action: rt.DoNothing,
                          flags: ft.None
                      };
                      return
                  }
              case L.FRAG_GAP:
              case L.FRAG_DECRYPT_ERROR: {
                  e.errorAction = this.getFragRetryOrSwitchAction(e), e.errorAction.action = rt.SendAlternateToPenaltyBox;
                  return
              }
              case L.LEVEL_EMPTY_ERROR:
              case L.LEVEL_PARSING_ERROR: {
                  var o, l;
                  const c = e.parent === U.MAIN ? e.level : r.loadLevel;
                  e.details === L.LEVEL_EMPTY_ERROR && ((o = e.context) != null && (l = o.levelDetails) != null && l.live) ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, c) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, c))
              }
              return;
              case L.LEVEL_LOAD_ERROR:
              case L.LEVEL_LOAD_TIMEOUT:
                  typeof(n == null ? void 0 : n.level) == "number" && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.level));
                  return;
              case L.AUDIO_TRACK_LOAD_ERROR:
              case L.AUDIO_TRACK_LOAD_TIMEOUT:
              case L.SUBTITLE_LOAD_ERROR:
              case L.SUBTITLE_TRACK_LOAD_TIMEOUT:
                  if (n) {
                      const c = r.levels[r.loadLevel];
                      if (c && (n.type === G.AUDIO_TRACK && n.groupId === c.audioGroupId || n.type === G.SUBTITLE_TRACK && n.groupId === c.textGroupId)) {
                          e.errorAction = this.getPlaylistRetryOrSwitchAction(e, r.loadLevel), e.errorAction.action = rt.SendAlternateToPenaltyBox, e.errorAction.flags = ft.MoveAllAlternatesMatchingHost;
                          return
                      }
                  }
                  return;
              case L.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED: {
                  const c = r.levels[r.loadLevel],
                      h = c == null ? void 0 : c.attrs["HDCP-LEVEL"];
                  h && (e.errorAction = {
                      action: rt.SendAlternateToPenaltyBox,
                      flags: ft.MoveAllAlternatesMatchingHDCP,
                      hdcpLevel: h
                  })
              }
              return;
              case L.BUFFER_ADD_CODEC_ERROR:
              case L.REMUX_ALLOC_ERROR:
                  e.errorAction = this.getLevelSwitchAction(e, (i = e.level) != null ? i : r.loadLevel);
                  return;
              case L.INTERNAL_EXCEPTION:
              case L.BUFFER_APPENDING_ERROR:
              case L.BUFFER_APPEND_ERROR:
              case L.BUFFER_FULL_ERROR:
              case L.LEVEL_SWITCH_ERROR:
              case L.BUFFER_STALLED_ERROR:
              case L.BUFFER_SEEK_OVER_HOLE:
              case L.BUFFER_NUDGE_ON_STALL:
                  e.errorAction = {
                      action: rt.DoNothing,
                      flags: ft.None
                  };
                  return
          }
          if (e.type === N.KEY_SYSTEM_ERROR) {
              const c = this.getVariantLevelIndex(e.frag);
              e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, c);
              return
          }
      }
      getPlaylistRetryOrSwitchAction(t, e) {
          var s;
          const i = this.hls,
              r = ks(i.config.playlistLoadPolicy, t),
              n = this.playlistError++,
              o = (s = t.response) == null ? void 0 : s.code;
          if (oe(r, n, ae(t), o)) return {
              action: rt.RetryRequest,
              flags: ft.None,
              retryConfig: r,
              retryCount: n
          };
          const c = this.getLevelSwitchAction(t, e);
          return r && (c.retryConfig = r, c.retryCount = n), c
      }
      getFragRetryOrSwitchAction(t) {
          const e = this.hls,
              s = this.getVariantLevelIndex(t.frag),
              i = e.levels[s],
              {
                  fragLoadPolicy: r,
                  keyLoadPolicy: n
              } = e.config,
              o = ks(t.details.startsWith("key") ? n : r, t),
              l = e.levels.reduce((u, d) => u + d.fragmentError, 0);
          if (i) {
              var c;
              t.details !== L.FRAG_GAP && i.fragmentError++;
              const u = (c = t.response) == null ? void 0 : c.code;
              if (oe(o, l, ae(t), u)) return {
                  action: rt.RetryRequest,
                  flags: ft.None,
                  retryConfig: o,
                  retryCount: l
              }
          }
          const h = this.getLevelSwitchAction(t, s);
          return o && (h.retryConfig = o, h.retryCount = l), h
      }
      getLevelSwitchAction(t, e) {
          const s = this.hls;
          e == null && (e = s.loadLevel);
          const i = this.hls.levels[e];
          if (i && (i.loadError++, s.autoLevelEnabled)) {
              var r, n;
              let o = -1;
              const {
                  levels: l,
                  loadLevel: c,
                  minAutoLevel: h,
                  maxAutoLevel: u
              } = s, d = (r = t.frag) == null ? void 0 : r.type, {
                  type: f,
                  groupId: g
              } = (n = t.context) != null ? n : {};
              for (let p = l.length; p--;) {
                  const T = (p + c) % l.length;
                  if (T !== c && T >= h && T <= u && l[T].loadError === 0) {
                      const y = l[T];
                      if (t.details === L.FRAG_GAP && t.frag) {
                          const S = l[T].details;
                          if (S) {
                              const E = Yt(t.frag, S.fragments, t.frag.start);
                              if (E != null && E.gap) continue
                          }
                      } else {
                          if (f === G.AUDIO_TRACK && g === y.audioGroupId || f === G.SUBTITLE_TRACK && g === y.textGroupId) continue;
                          if (d === U.AUDIO && i.audioGroupId === y.audioGroupId || d === U.SUBTITLE && i.textGroupId === y.textGroupId) continue
                      }
                      o = T;
                      break
                  }
              }
              if (o > -1 && s.loadLevel !== o) return t.levelRetry = !0, this.playlistError = 0, {
                  action: rt.SendAlternateToPenaltyBox,
                  flags: ft.None,
                  nextAutoLevel: o
              }
          }
          return {
              action: rt.SendAlternateToPenaltyBox,
              flags: ft.MoveAllAlternatesMatchingHost
          }
      }
      onErrorOut(t, e) {
          var s;
          switch ((s = e.errorAction) == null ? void 0 : s.action) {
              case rt.DoNothing:
                  break;
              case rt.SendAlternateToPenaltyBox:
                  this.sendAlternateToPenaltyBox(e), !e.errorAction.resolved && e.details !== L.FRAG_GAP && (e.fatal = !0);
                  break
          }
          if (e.fatal) {
              this.hls.stopLoad();
              return
          }
      }
      sendAlternateToPenaltyBox(t) {
          const e = this.hls,
              s = t.errorAction;
          if (!s) return;
          const {
              flags: i,
              hdcpLevel: r,
              nextAutoLevel: n
          } = s;
          switch (i) {
              case ft.None:
                  this.switchLevel(t, n);
                  break;
              case ft.MoveAllAlternatesMatchingHost:
                  s.resolved || (s.resolved = this.redundantFailover(t));
                  break;
              case ft.MoveAllAlternatesMatchingHDCP:
                  r && (e.maxHdcpLevel = Ge[Ge.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${e.maxHdcpLevel}" or lower`);
                  break
          }
          s.resolved || this.switchLevel(t, n)
      }
      switchLevel(t, e) {
          e !== void 0 && t.errorAction && (this.warn(`switching to level ${e} after ${t.details}`), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel)
      }
      redundantFailover(t) {
          const {
              hls: e,
              penalizedRenditions: s
          } = this, i = t.parent === U.MAIN ? t.level : e.loadLevel, r = e.levels[i], n = r.url.length, o = t.frag ? t.frag.urlId : r.urlId;
          r.urlId === o && (!t.frag || r.details) && this.penalizeRendition(r, t);
          for (let l = 1; l < n; l++) {
              const c = (o + l) % n,
                  h = s[c];
              if (!h || Sn(h, t, s[o])) return this.warn(`Switching to Redundant Stream ${c+1}/${n}: "${r.url[c]}" after ${t.details}`), this.playlistError = 0, e.levels.forEach(u => {
                  u.urlId = c
              }), e.nextLoadLevel = i, !0
          }
          return !1
      }
      penalizeRendition(t, e) {
          const {
              penalizedRenditions: s
          } = this, i = s[t.urlId] || {
              lastErrorPerfMs: 0,
              errors: [],
              details: void 0
          };
          i.lastErrorPerfMs = performance.now(), i.errors.push(e), i.details = t.details, s[t.urlId] = i
      }
  }
  
  function Sn(a, t, e) {
      if (performance.now() - a.lastErrorPerfMs > xn) return !0;
      const s = a.details;
      if (t.details === L.FRAG_GAP && s && t.frag) {
          const i = t.frag.start,
              r = Yt(null, s.fragments, i);
          if (r && !r.gap) return !0
      }
      if (e && a.errors.length < e.errors.length) {
          const i = a.errors[a.errors.length - 1];
          if (s && i.frag && t.frag && Math.abs(i.frag.start - t.frag.start) > s.targetduration * 3) return !0
      }
      return !1
  }
  class Qe {
      constructor(t, e) {
          this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = x.log.bind(x, `${e}:`), this.warn = x.warn.bind(x, `${e}:`), this.hls = t
      }
      destroy() {
          this.clearTimer(), this.hls = this.log = this.warn = null
      }
      clearTimer() {
          clearTimeout(this.timer), this.timer = -1
      }
      startLoad() {
          this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist()
      }
      stopLoad() {
          this.canLoad = !1, this.clearTimer()
      }
      switchParams(t, e) {
          const s = e == null ? void 0 : e.renditionReports;
          if (s) {
              let i = -1;
              for (let r = 0; r < s.length; r++) {
                  const n = s[r];
                  let o;
                  try {
                      o = new self.URL(n.URI, e.url).href
                  } catch (l) {
                      x.warn(`Could not construct new URL for Rendition Report: ${l}`), o = n.URI || ""
                  }
                  if (o === t) {
                      i = r;
                      break
                  } else o === t.substring(0, o.length) && (i = r)
              }
              if (i !== -1) {
                  const r = s[i],
                      n = parseInt(r["LAST-MSN"]) || (e == null ? void 0 : e.lastPartSn);
                  let o = parseInt(r["LAST-PART"]) || (e == null ? void 0 : e.lastPartIndex);
                  if (this.hls.config.lowLatencyMode) {
                      const l = Math.min(e.age - e.partTarget, e.targetduration);
                      o >= 0 && l > e.partTarget && (o += 1)
                  }
                  return new Ds(n, o >= 0 ? o : void 0, Ht.No)
              }
          }
      }
      loadPlaylist(t) {
          this.requestScheduled === -1 && (this.requestScheduled = self.performance.now())
      }
      shouldLoadPlaylist(t) {
          return this.canLoad && !!t && !!t.url && (!t.details || t.details.live)
      }
      shouldReloadPlaylist(t) {
          return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(t)
      }
      playlistLoaded(t, e, s) {
          const {
              details: i,
              stats: r
          } = e, n = self.performance.now(), o = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
          if (i.advancedDateTime = Date.now() - o, i.live || s != null && s.live) {
              if (i.reloaded(s), s && this.log(`live playlist ${t} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`), s && i.fragments.length > 0 && cn(s, i), !this.canLoad || !i.live) return;
              let l, c, h;
              if (i.canBlockReload && i.endSN && i.advanced) {
                  const T = this.hls.config.lowLatencyMode,
                      y = i.lastPartSn,
                      S = i.endSN,
                      E = i.lastPartIndex,
                      R = E !== -1,
                      A = y === S,
                      _ = T ? 0 : E;
                  R ? (c = A ? S + 1 : y, h = A ? _ : E + 1) : c = S + 1;
                  const D = i.age,
                      C = D + i.ageHeader;
                  let k = Math.min(C - i.partTarget, i.targetduration * 1.5);
                  if (k > 0) {
                      if (s && k > s.tuneInGoal) this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${k} with playlist age: ${i.age}`), k = 0;
                      else {
                          const I = Math.floor(k / i.targetduration);
                          if (c += I, h !== void 0) {
                              const O = Math.round(k % i.targetduration / i.partTarget);
                              h += O
                          }
                          this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${D.toFixed(2)}s goal: ${k} skip sn ${I} to part ${h}`)
                      }
                      i.tuneInGoal = k
                  }
                  if (l = this.getDeliveryDirectives(i, e.deliveryDirectives, c, h), T || !A) {
                      this.loadPlaylist(l);
                      return
                  }
              } else(i.canBlockReload || i.canSkipUntil) && (l = this.getDeliveryDirectives(i, e.deliveryDirectives, c, h));
              const u = this.hls.mainForwardBufferInfo,
                  d = u ? u.end - u.len : 0,
                  f = (i.edge - d) * 1e3,
                  g = fn(i, f);
              i.updated && n > this.requestScheduled + g && (this.requestScheduled = r.loading.start), c !== void 0 && i.canBlockReload ? this.requestScheduled = r.loading.first + g - (i.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + g < n ? this.requestScheduled = n : this.requestScheduled - n <= 0 && (this.requestScheduled += g);
              let p = this.requestScheduled - n;
              p = Math.max(0, p), this.log(`reload live playlist ${t} in ${Math.round(p)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), p)
          } else this.clearTimer()
      }
      getDeliveryDirectives(t, e, s, i) {
          let r = ln(t, s);
          return e != null && e.skip && t.deltaUpdateFailed && (s = e.msn, i = e.part, r = Ht.No), new Ds(s, i, r)
      }
      checkRetry(t) {
          const e = t.details,
              s = ae(t),
              i = t.errorAction,
              {
                  action: r,
                  retryCount: n = 0,
                  retryConfig: o
              } = i || {},
              l = !!i && !!o && (r === rt.RetryRequest || !i.resolved && r === rt.SendAlternateToPenaltyBox);
          if (l) {
              var c;
              if (this.requestScheduled = -1, n >= o.maxNumRetry) return !1;
              if (s && (c = t.context) != null && c.deliveryDirectives) this.warn(`Retrying playlist loading ${n+1}/${o.maxNumRetry} after "${e}" without delivery-directives`), this.loadPlaylist();
              else {
                  const h = ze(o, n);
                  this.timer = self.setTimeout(() => this.loadPlaylist(), h), this.warn(`Retrying playlist loading ${n+1}/${o.maxNumRetry} after "${e}" in ${h}ms`)
              }
              t.levelRetry = !0, i.resolved = !0
          }
          return l
      }
  }
  let ve;
  class vn extends Qe {
      constructor(t, e) {
          super(t, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = e, this._registerListeners()
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(m.LEVEL_LOADED, this.onLevelLoaded, this), t.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(m.FRAG_LOADED, this.onFragLoaded, this), t.on(m.ERROR, this.onError, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(m.LEVEL_LOADED, this.onLevelLoaded, this), t.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(m.FRAG_LOADED, this.onFragLoaded, this), t.off(m.ERROR, this.onError, this)
      }
      destroy() {
          this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy()
      }
      startLoad() {
          this._levels.forEach(e => {
              e.loadError = 0, e.fragmentError = 0
          }), super.startLoad()
      }
      resetLevels() {
          this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = []
      }
      onManifestLoading(t, e) {
          this.resetLevels()
      }
      onManifestLoaded(t, e) {
          const s = [],
              i = {};
          let r;
          e.levels.forEach(n => {
              var o;
              const l = n.attrs;
              ((o = n.audioCodec) == null ? void 0 : o.indexOf("mp4a.40.34")) !== -1 && (ve || (ve = /chrome|firefox/i.test(navigator.userAgent)), ve && (n.audioCodec = void 0));
              const {
                  AUDIO: c,
                  CODECS: h,
                  "FRAME-RATE": u,
                  "PATHWAY-ID": d,
                  RESOLUTION: f,
                  SUBTITLES: g
              } = l, T = `${`${d||"."}-`}${n.bitrate}-${f}-${u}-${h}`;
              r = i[T], r ? r.addFallback(n) : (r = new Wt(n), i[T] = r, s.push(r)), le(r, "audio", c), le(r, "text", g)
          }), this.filterAndSortMediaOptions(s, e)
      }
      filterAndSortMediaOptions(t, e) {
          let s = [],
              i = [],
              r = !1,
              n = !1,
              o = !1,
              l = t.filter(({
                  audioCodec: f,
                  videoCodec: g,
                  width: p,
                  height: T,
                  unknownCodecs: y
              }) => (r || (r = !!(p && T)), n || (n = !!g), o || (o = !!f), !(y != null && y.length) && (!f || ye(f, "audio")) && (!g || ye(g, "video"))));
          if ((r || n) && o && (l = l.filter(({
                  videoCodec: f,
                  width: g,
                  height: p
              }) => !!f || !!(g && p))), l.length === 0) {
              Promise.resolve().then(() => {
                  if (this.hls) {
                      const f = new Error("no level with compatible codecs found in manifest");
                      this.hls.trigger(m.ERROR, {
                          type: N.MEDIA_ERROR,
                          details: L.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                          fatal: !0,
                          url: e.url,
                          error: f,
                          reason: f.message
                      })
                  }
              });
              return
          }
          e.audioTracks && (s = e.audioTracks.filter(f => !f.audioCodec || ye(f.audioCodec, "audio")), ws(s)), e.subtitles && (i = e.subtitles, ws(i));
          const c = l.slice(0);
          l.sort((f, g) => f.attrs["HDCP-LEVEL"] !== g.attrs["HDCP-LEVEL"] ? (f.attrs["HDCP-LEVEL"] || "") > (g.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : f.bitrate !== g.bitrate ? f.bitrate - g.bitrate : f.attrs["FRAME-RATE"] !== g.attrs["FRAME-RATE"] ? f.attrs.decimalFloatingPoint("FRAME-RATE") - g.attrs.decimalFloatingPoint("FRAME-RATE") : f.attrs.SCORE !== g.attrs.SCORE ? f.attrs.decimalFloatingPoint("SCORE") - g.attrs.decimalFloatingPoint("SCORE") : r && f.height !== g.height ? f.height - g.height : 0);
          let h = c[0];
          if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== c.length)) {
              for (let f = 0; f < c.length; f++)
                  if (c[f].pathwayId === l[0].pathwayId) {
                      h = c[f];
                      break
                  }
          }
          this._levels = l;
          for (let f = 0; f < l.length; f++)
              if (l[f] === h) {
                  this._firstLevel = f, this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${h.bitrate}`);
                  break
              } const u = o && !n,
              d = {
                  levels: l,
                  audioTracks: s,
                  subtitleTracks: i,
                  sessionData: e.sessionData,
                  sessionKeys: e.sessionKeys,
                  firstLevel: this._firstLevel,
                  stats: e.stats,
                  audio: o,
                  video: n,
                  altAudio: !u && s.some(f => !!f.url)
              };
          this.hls.trigger(m.MANIFEST_PARSED, d), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
      }
      get levels() {
          return this._levels.length === 0 ? null : this._levels
      }
      get level() {
          return this.currentLevelIndex
      }
      set level(t) {
          const e = this._levels;
          if (e.length === 0) return;
          if (t < 0 || t >= e.length) {
              const h = new Error("invalid level idx"),
                  u = t < 0;
              if (this.hls.trigger(m.ERROR, {
                      type: N.OTHER_ERROR,
                      details: L.LEVEL_SWITCH_ERROR,
                      level: t,
                      fatal: u,
                      error: h,
                      reason: h.message
                  }), u) return;
              t = Math.min(t, e.length - 1)
          }
          const s = this.currentLevelIndex,
              i = this.currentLevel,
              r = i ? i.attrs["PATHWAY-ID"] : void 0,
              n = e[t],
              o = n.attrs["PATHWAY-ID"];
          if (this.currentLevelIndex = t, this.currentLevel = n, s === t && n.details && i && r === o) return;
          this.log(`Switching to level ${t}${o?" with Pathway "+o:""} from level ${s}${r?" with Pathway "+r:""}`);
          const l = tt({}, n, {
              level: t,
              maxBitrate: n.maxBitrate,
              attrs: n.attrs,
              uri: n.uri,
              urlId: n.urlId
          });
          delete l._attrs, delete l._urlId, this.hls.trigger(m.LEVEL_SWITCHING, l);
          const c = n.details;
          if (!c || c.live) {
              const h = this.switchParams(n.uri, i == null ? void 0 : i.details);
              this.loadPlaylist(h)
          }
      }
      get manualLevel() {
          return this.manualLevelIndex
      }
      set manualLevel(t) {
          this.manualLevelIndex = t, this._startLevel === void 0 && (this._startLevel = t), t !== -1 && (this.level = t)
      }
      get firstLevel() {
          return this._firstLevel
      }
      set firstLevel(t) {
          this._firstLevel = t
      }
      get startLevel() {
          if (this._startLevel === void 0) {
              const t = this.hls.config.startLevel;
              return t !== void 0 ? t : this._firstLevel
          } else return this._startLevel
      }
      set startLevel(t) {
          this._startLevel = t
      }
      onError(t, e) {
          e.fatal || !e.context || e.context.type === G.LEVEL && e.context.level === this.level && this.checkRetry(e)
      }
      onFragLoaded(t, {
          frag: e
      }) {
          if (e !== void 0 && e.type === U.MAIN) {
              const s = this._levels[e.level];
              s !== void 0 && (s.loadError = 0)
          }
      }
      onLevelLoaded(t, e) {
          var s;
          const {
              level: i,
              details: r
          } = e, n = this._levels[i];
          if (!n) {
              var o;
              this.warn(`Invalid level index ${i}`), (o = e.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
              return
          }
          i === this.currentLevelIndex ? (n.fragmentError === 0 && (n.loadError = 0), this.playlistLoaded(i, e, n.details)) : (s = e.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0)
      }
      onAudioTrackSwitched(t, e) {
          const s = this.currentLevel;
          if (!s) return;
          const i = this.hls.audioTracks[e.id].groupId;
          if (s.audioGroupIds && s.audioGroupId !== i) {
              let r = -1;
              for (let n = 0; n < s.audioGroupIds.length; n++)
                  if (s.audioGroupIds[n] === i) {
                      r = n;
                      break
                  } r !== -1 && r !== s.urlId && (s.urlId = r, this.canLoad && this.startLoad())
          }
      }
      loadPlaylist(t) {
          super.loadPlaylist();
          const e = this.currentLevelIndex,
              s = this.currentLevel;
          if (s && this.shouldLoadPlaylist(s)) {
              const i = s.urlId;
              let r = s.uri;
              if (t) try {
                  r = t.addDirectives(r)
              } catch (o) {
                  this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`)
              }
              const n = s.attrs["PATHWAY-ID"];
              this.log(`Loading level index ${e}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""} with${n?" Pathway "+n:""} URI ${i+1}/${s.url.length} ${r}`), this.clearTimer(), this.hls.trigger(m.LEVEL_LOADING, {
                  url: r,
                  level: e,
                  id: i,
                  deliveryDirectives: t || null
              })
          }
      }
      get nextLoadLevel() {
          return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel
      }
      set nextLoadLevel(t) {
          this.level = t, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = t)
      }
      removeLevel(t, e) {
          const s = (r, n) => n !== e,
              i = this._levels.filter((r, n) => n !== t ? !0 : r.url.length > 1 && e !== void 0 ? (r.url = r.url.filter(s), r.audioGroupIds && (r.audioGroupIds = r.audioGroupIds.filter(s)), r.textGroupIds && (r.textGroupIds = r.textGroupIds.filter(s)), r.urlId = 0, !0) : (this.steering && this.steering.removeLevel(r), !1));
          this.hls.trigger(m.LEVELS_UPDATED, {
              levels: i
          })
      }
      onLevelsUpdated(t, {
          levels: e
      }) {
          e.forEach((s, i) => {
              const {
                  details: r
              } = s;
              r != null && r.fragments && r.fragments.forEach(n => {
                  n.level = i
              })
          }), this._levels = e
      }
  }
  
  function le(a, t, e) {
      e && (t === "audio" ? (a.audioGroupIds || (a.audioGroupIds = []), a.audioGroupIds[a.url.length - 1] = e) : t === "text" && (a.textGroupIds || (a.textGroupIds = []), a.textGroupIds[a.url.length - 1] = e))
  }
  
  function ws(a) {
      const t = {};
      a.forEach(e => {
          const s = e.groupId || "";
          e.id = t[s] = t[s] || 0, t[s]++
      })
  }
  var et = {
      NOT_LOADED: "NOT_LOADED",
      APPENDING: "APPENDING",
      PARTIAL: "PARTIAL",
      OK: "OK"
  };
  class An {
      constructor(t) {
          this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = t, this._registerListeners()
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.BUFFER_APPENDED, this.onBufferAppended, this), t.on(m.FRAG_BUFFERED, this.onFragBuffered, this), t.on(m.FRAG_LOADED, this.onFragLoaded, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.BUFFER_APPENDED, this.onBufferAppended, this), t.off(m.FRAG_BUFFERED, this.onFragBuffered, this), t.off(m.FRAG_LOADED, this.onFragLoaded, this)
      }
      destroy() {
          this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null
      }
      getAppendedFrag(t, e) {
          const s = this.activePartLists[e];
          if (s)
              for (let i = s.length; i--;) {
                  const r = s[i];
                  if (!r) break;
                  const n = r.end;
                  if (r.start <= t && n !== null && t <= n) return r
              }
          return this.getBufferedFrag(t, e)
      }
      getBufferedFrag(t, e) {
          const {
              fragments: s
          } = this, i = Object.keys(s);
          for (let r = i.length; r--;) {
              const n = s[i[r]];
              if ((n == null ? void 0 : n.body.type) === e && n.buffered) {
                  const o = n.body;
                  if (o.start <= t && t <= o.end) return o
              }
          }
          return null
      }
      detectEvictedFragments(t, e, s, i) {
          this.timeRanges && (this.timeRanges[t] = e);
          const r = (i == null ? void 0 : i.fragment.sn) || -1;
          Object.keys(this.fragments).forEach(n => {
              const o = this.fragments[n];
              if (!o || r >= o.body.sn) return;
              if (!o.buffered && !o.loaded) {
                  o.body.type === s && this.removeFragment(o.body);
                  return
              }
              const l = o.range[t];
              l && l.time.some(c => {
                  const h = !this.isTimeBuffered(c.startPTS, c.endPTS, e);
                  return h && this.removeFragment(o.body), h
              })
          })
      }
      detectPartialFragments(t) {
          const e = this.timeRanges,
              {
                  frag: s,
                  part: i
              } = t;
          if (!e || s.sn === "initSegment") return;
          const r = Pt(s),
              n = this.fragments[r];
          if (!n || n.buffered && s.gap) return;
          const o = !s.relurl;
          Object.keys(e).forEach(l => {
              const c = s.elementaryStreams[l];
              if (!c) return;
              const h = e[l],
                  u = o || c.partial === !0;
              n.range[l] = this.getBufferedTimes(s, i, u, h)
          }), n.loaded = null, Object.keys(n.range).length ? (n.buffered = !0, (n.body.endList = s.endList || n.body.endList) && (this.endListFragments[n.body.type] = n), Xt(n) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(n.body)
      }
      removeParts(t, e) {
          const s = this.activePartLists[e];
          s && (this.activePartLists[e] = s.filter(i => i.fragment.sn >= t))
      }
      fragBuffered(t, e) {
          const s = Pt(t);
          let i = this.fragments[s];
          !i && e && (i = this.fragments[s] = {
              body: t,
              appendedPTS: null,
              loaded: null,
              buffered: !1,
              range: Object.create(null)
          }, t.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0)
      }
      getBufferedTimes(t, e, s, i) {
          const r = {
                  time: [],
                  partial: s
              },
              n = t.start,
              o = t.end,
              l = t.minEndPTS || o,
              c = t.maxStartPTS || n;
          for (let h = 0; h < i.length; h++) {
              const u = i.start(h) - this.bufferPadding,
                  d = i.end(h) + this.bufferPadding;
              if (c >= u && l <= d) {
                  r.time.push({
                      startPTS: Math.max(n, i.start(h)),
                      endPTS: Math.min(o, i.end(h))
                  });
                  break
              } else if (n < d && o > u) r.partial = !0, r.time.push({
                  startPTS: Math.max(n, i.start(h)),
                  endPTS: Math.min(o, i.end(h))
              });
              else if (o <= u) break
          }
          return r
      }
      getPartialFragment(t) {
          let e = null,
              s, i, r, n = 0;
          const {
              bufferPadding: o,
              fragments: l
          } = this;
          return Object.keys(l).forEach(c => {
              const h = l[c];
              h && Xt(h) && (i = h.body.start - o, r = h.body.end + o, t >= i && t <= r && (s = Math.min(t - i, r - t), n <= s && (e = h.body, n = s)))
          }), e
      }
      isEndListAppended(t) {
          const e = this.endListFragments[t];
          return e !== void 0 && (e.buffered || Xt(e))
      }
      getState(t) {
          const e = Pt(t),
              s = this.fragments[e];
          return s ? s.buffered ? Xt(s) ? et.PARTIAL : et.OK : et.APPENDING : et.NOT_LOADED
      }
      isTimeBuffered(t, e, s) {
          let i, r;
          for (let n = 0; n < s.length; n++) {
              if (i = s.start(n) - this.bufferPadding, r = s.end(n) + this.bufferPadding, t >= i && e <= r) return !0;
              if (e <= i) return !1
          }
          return !1
      }
      onFragLoaded(t, e) {
          const {
              frag: s,
              part: i
          } = e;
          if (s.sn === "initSegment" || s.bitrateTest) return;
          const r = i ? null : e,
              n = Pt(s);
          this.fragments[n] = {
              body: s,
              appendedPTS: null,
              loaded: r,
              buffered: !1,
              range: Object.create(null)
          }
      }
      onBufferAppended(t, e) {
          const {
              frag: s,
              part: i,
              timeRanges: r
          } = e;
          if (s.sn === "initSegment") return;
          const n = s.type;
          if (i) {
              let o = this.activePartLists[n];
              o || (this.activePartLists[n] = o = []), o.push(i)
          }
          this.timeRanges = r, Object.keys(r).forEach(o => {
              const l = r[o];
              this.detectEvictedFragments(o, l, n, i)
          })
      }
      onFragBuffered(t, e) {
          this.detectPartialFragments(e)
      }
      hasFragment(t) {
          const e = Pt(t);
          return !!this.fragments[e]
      }
      hasParts(t) {
          var e;
          return !!((e = this.activePartLists[t]) != null && e.length)
      }
      removeFragmentsInRange(t, e, s, i, r) {
          i && !this.hasGaps || Object.keys(this.fragments).forEach(n => {
              const o = this.fragments[n];
              if (!o) return;
              const l = o.body;
              l.type !== s || i && !l.gap || l.start < e && l.end > t && (o.buffered || r) && this.removeFragment(l)
          })
      }
      removeFragment(t) {
          const e = Pt(t);
          t.stats.loaded = 0, t.clearElementaryStreamInfo();
          const s = this.activePartLists[t.type];
          if (s) {
              const i = t.sn;
              this.activePartLists[t.type] = s.filter(r => r.fragment.sn !== i)
          }
          delete this.fragments[e], t.endList && delete this.endListFragments[t.type]
      }
      removeAllFragments() {
          this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1
      }
  }
  
  function Xt(a) {
      var t, e, s;
      return a.buffered && (a.body.gap || ((t = a.range.video) == null ? void 0 : t.partial) || ((e = a.range.audio) == null ? void 0 : e.partial) || ((s = a.range.audiovideo) == null ? void 0 : s.partial))
  }
  
  function Pt(a) {
      return `${a.type}_${a.level}_${a.urlId}_${a.sn}`
  }
  const Ps = Math.pow(2, 17);
  class Ln {
      constructor(t) {
          this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
      }
      destroy() {
          this.loader && (this.loader.destroy(), this.loader = null)
      }
      abort() {
          this.loader && this.loader.abort()
      }
      load(t, e) {
          const s = t.url;
          if (!s) return Promise.reject(new At({
              type: N.NETWORK_ERROR,
              details: L.FRAG_LOAD_ERROR,
              fatal: !1,
              frag: t,
              error: new Error(`Fragment does not have a ${s?"part list":"url"}`),
              networkDetails: null
          }));
          this.abort();
          const i = this.config,
              r = i.fLoader,
              n = i.loader;
          return new Promise((o, l) => {
              if (this.loader && this.loader.destroy(), t.gap)
                  if (t.tagList.some(f => f[0] === "GAP")) {
                      l(Os(t));
                      return
                  } else t.gap = !1;
              const c = this.loader = t.loader = r ? new r(i) : new n(i),
                  h = Fs(t),
                  u = _s(i.fragLoadPolicy.default),
                  d = {
                      loadPolicy: u,
                      timeout: u.maxLoadTimeMs,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: 0,
                      highWaterMark: t.sn === "initSegment" ? 1 / 0 : Ps
                  };
              t.stats = c.stats, c.load(h, d, {
                  onSuccess: (f, g, p, T) => {
                      this.resetLoader(t, c);
                      let y = f.data;
                      p.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(y.slice(0, 16)), y = y.slice(16)), o({
                          frag: t,
                          part: null,
                          payload: y,
                          networkDetails: T
                      })
                  },
                  onError: (f, g, p, T) => {
                      this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.FRAG_LOAD_ERROR,
                          fatal: !1,
                          frag: t,
                          response: at({
                              url: s,
                              data: void 0
                          }, f),
                          error: new Error(`HTTP Error ${f.code} ${f.text}`),
                          networkDetails: p,
                          stats: T
                      }))
                  },
                  onAbort: (f, g, p) => {
                      this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.INTERNAL_ABORTED,
                          fatal: !1,
                          frag: t,
                          error: new Error("Aborted"),
                          networkDetails: p,
                          stats: f
                      }))
                  },
                  onTimeout: (f, g, p) => {
                      this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.FRAG_LOAD_TIMEOUT,
                          fatal: !1,
                          frag: t,
                          error: new Error(`Timeout after ${d.timeout}ms`),
                          networkDetails: p,
                          stats: f
                      }))
                  },
                  onProgress: (f, g, p, T) => {
                      e && e({
                          frag: t,
                          part: null,
                          payload: p,
                          networkDetails: T
                      })
                  }
              })
          })
      }
      loadPart(t, e, s) {
          this.abort();
          const i = this.config,
              r = i.fLoader,
              n = i.loader;
          return new Promise((o, l) => {
              if (this.loader && this.loader.destroy(), t.gap || e.gap) {
                  l(Os(t, e));
                  return
              }
              const c = this.loader = t.loader = r ? new r(i) : new n(i),
                  h = Fs(t, e),
                  u = _s(i.fragLoadPolicy.default),
                  d = {
                      loadPolicy: u,
                      timeout: u.maxLoadTimeMs,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: 0,
                      highWaterMark: Ps
                  };
              e.stats = c.stats, c.load(h, d, {
                  onSuccess: (f, g, p, T) => {
                      this.resetLoader(t, c), this.updateStatsFromPart(t, e);
                      const y = {
                          frag: t,
                          part: e,
                          payload: f.data,
                          networkDetails: T
                      };
                      s(y), o(y)
                  },
                  onError: (f, g, p, T) => {
                      this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.FRAG_LOAD_ERROR,
                          fatal: !1,
                          frag: t,
                          part: e,
                          response: at({
                              url: h.url,
                              data: void 0
                          }, f),
                          error: new Error(`HTTP Error ${f.code} ${f.text}`),
                          networkDetails: p,
                          stats: T
                      }))
                  },
                  onAbort: (f, g, p) => {
                      t.stats.aborted = e.stats.aborted, this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.INTERNAL_ABORTED,
                          fatal: !1,
                          frag: t,
                          part: e,
                          error: new Error("Aborted"),
                          networkDetails: p,
                          stats: f
                      }))
                  },
                  onTimeout: (f, g, p) => {
                      this.resetLoader(t, c), l(new At({
                          type: N.NETWORK_ERROR,
                          details: L.FRAG_LOAD_TIMEOUT,
                          fatal: !1,
                          frag: t,
                          part: e,
                          error: new Error(`Timeout after ${d.timeout}ms`),
                          networkDetails: p,
                          stats: f
                      }))
                  }
              })
          })
      }
      updateStatsFromPart(t, e) {
          const s = t.stats,
              i = e.stats,
              r = i.total;
          if (s.loaded += i.loaded, r) {
              const l = Math.round(t.duration / e.duration),
                  c = Math.min(Math.round(s.loaded / r), l),
                  u = (l - c) * Math.round(s.loaded / c);
              s.total = s.loaded + u
          } else s.total = Math.max(s.loaded, s.total);
          const n = s.loading,
              o = i.loading;
          n.start ? n.first += o.first - o.start : (n.start = o.start, n.first = o.first), n.end = o.end
      }
      resetLoader(t, e) {
          t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
      }
  }
  
  function Fs(a, t = null) {
      const e = t || a,
          s = {
              frag: a,
              part: t,
              responseType: "arraybuffer",
              url: e.url,
              headers: {},
              rangeStart: 0,
              rangeEnd: 0
          },
          i = e.byteRangeStartOffset,
          r = e.byteRangeEndOffset;
      if (F(i) && F(r)) {
          var n;
          let o = i,
              l = r;
          if (a.sn === "initSegment" && ((n = a.decryptdata) == null ? void 0 : n.method) === "AES-128") {
              const c = r - i;
              c % 16 && (l = r + (16 - c % 16)), i !== 0 && (s.resetIV = !0, o = i - 16)
          }
          s.rangeStart = o, s.rangeEnd = l
      }
      return s
  }
  
  function Os(a, t) {
      const e = new Error(`GAP ${a.gap?"tag":"attribute"} found`),
          s = {
              type: N.MEDIA_ERROR,
              details: L.FRAG_GAP,
              fatal: !1,
              frag: a,
              error: e,
              networkDetails: null
          };
      return t && (s.part = t), (t || a).stats.aborted = !0, new At(s)
  }
  class At extends Error {
      constructor(t) {
          super(t.error.message), this.data = void 0, this.data = t
      }
  }
  class Rn {
      constructor(t) {
          this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t
      }
      abort(t) {
          for (const e in this.keyUriToKeyInfo) {
              const s = this.keyUriToKeyInfo[e].loader;
              if (s) {
                  if (t && t !== s.context.frag.type) return;
                  s.abort()
              }
          }
      }
      detach() {
          for (const t in this.keyUriToKeyInfo) {
              const e = this.keyUriToKeyInfo[t];
              (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t]
          }
      }
      destroy() {
          this.detach();
          for (const t in this.keyUriToKeyInfo) {
              const e = this.keyUriToKeyInfo[t].loader;
              e && e.destroy()
          }
          this.keyUriToKeyInfo = {}
      }
      createKeyLoadError(t, e = L.KEY_LOAD_ERROR, s, i, r) {
          return new At({
              type: N.NETWORK_ERROR,
              details: e,
              fatal: !1,
              frag: t,
              response: r,
              error: s,
              networkDetails: i
          })
      }
      loadClear(t, e) {
          if (this.emeController && this.config.emeEnabled) {
              const {
                  sn: s,
                  cc: i
              } = t;
              for (let r = 0; r < e.length; r++) {
                  const n = e[r];
                  if (i <= n.cc && (s === "initSegment" || n.sn === "initSegment" || s < n.sn)) {
                      this.emeController.selectKeySystemFormat(n).then(o => {
                          n.setKeyFormat(o)
                      });
                      break
                  }
              }
          }
      }
      load(t) {
          return !t.decryptdata && t.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t).then(e => this.loadInternal(t, e)) : this.loadInternal(t)
      }
      loadInternal(t, e) {
          var s, i;
          e && t.setKeyFormat(e);
          const r = t.decryptdata;
          if (!r) {
              const c = new Error(e ? `Expected frag.decryptdata to be defined after setting format ${e}` : "Missing decryption data on fragment in onKeyLoading");
              return Promise.reject(this.createKeyLoadError(t, L.KEY_LOAD_ERROR, c))
          }
          const n = r.uri;
          if (!n) return Promise.reject(this.createKeyLoadError(t, L.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
          let o = this.keyUriToKeyInfo[n];
          if ((s = o) != null && s.decryptdata.key) return r.key = o.decryptdata.key, Promise.resolve({
              frag: t,
              keyInfo: o
          });
          if ((i = o) != null && i.keyLoadPromise) {
              var l;
              switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
                  case void 0:
                  case "status-pending":
                  case "usable":
                  case "usable-in-future":
                      return o.keyLoadPromise.then(c => (r.key = c.keyInfo.decryptdata.key, {
                          frag: t,
                          keyInfo: o
                      }))
              }
          }
          switch (o = this.keyUriToKeyInfo[n] = {
                  decryptdata: r,
                  keyLoadPromise: null,
                  loader: null,
                  mediaKeySessionContext: null
              }, r.method) {
              case "ISO-23001-7":
              case "SAMPLE-AES":
              case "SAMPLE-AES-CENC":
              case "SAMPLE-AES-CTR":
                  return r.keyFormat === "identity" ? this.loadKeyHTTP(o, t) : this.loadKeyEME(o, t);
              case "AES-128":
                  return this.loadKeyHTTP(o, t);
              default:
                  return Promise.reject(this.createKeyLoadError(t, L.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))
          }
      }
      loadKeyEME(t, e) {
          const s = {
              frag: e,
              keyInfo: t
          };
          if (this.emeController && this.config.emeEnabled) {
              const i = this.emeController.loadKey(s);
              if (i) return (t.keyLoadPromise = i.then(r => (t.mediaKeySessionContext = r, s))).catch(r => {
                  throw t.keyLoadPromise = null, r
              })
          }
          return Promise.resolve(s)
      }
      loadKeyHTTP(t, e) {
          const s = this.config,
              i = s.loader,
              r = new i(s);
          return e.keyLoader = t.loader = r, t.keyLoadPromise = new Promise((n, o) => {
              const l = {
                      keyInfo: t,
                      frag: e,
                      responseType: "arraybuffer",
                      url: t.decryptdata.uri
                  },
                  c = s.keyLoadPolicy.default,
                  h = {
                      loadPolicy: c,
                      timeout: c.maxLoadTimeMs,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: 0
                  },
                  u = {
                      onSuccess: (d, f, g, p) => {
                          const {
                              frag: T,
                              keyInfo: y,
                              url: S
                          } = g;
                          if (!T.decryptdata || y !== this.keyUriToKeyInfo[S]) return o(this.createKeyLoadError(T, L.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), p));
                          y.decryptdata.key = T.decryptdata.key = new Uint8Array(d.data), T.keyLoader = null, y.loader = null, n({
                              frag: T,
                              keyInfo: y
                          })
                      },
                      onError: (d, f, g, p) => {
                          this.resetLoader(f), o(this.createKeyLoadError(e, L.KEY_LOAD_ERROR, new Error(`HTTP Error ${d.code} loading key ${d.text}`), g, at({
                              url: l.url,
                              data: void 0
                          }, d)))
                      },
                      onTimeout: (d, f, g) => {
                          this.resetLoader(f), o(this.createKeyLoadError(e, L.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g))
                      },
                      onAbort: (d, f, g) => {
                          this.resetLoader(f), o(this.createKeyLoadError(e, L.INTERNAL_ABORTED, new Error("key loading aborted"), g))
                      }
                  };
              r.load(l, h, u)
          })
      }
      resetLoader(t) {
          const {
              frag: e,
              keyInfo: s,
              url: i
          } = t, r = s.loader;
          e.keyLoader === r && (e.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[i], r && r.destroy()
      }
  }
  class In {
      constructor() {
          this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
      }
      destroy() {
          this.onHandlerDestroying(), this.onHandlerDestroyed()
      }
      onHandlerDestroying() {
          this.clearNextTick(), this.clearInterval()
      }
      onHandlerDestroyed() {}
      hasInterval() {
          return !!this._tickInterval
      }
      hasNextTick() {
          return !!this._tickTimer
      }
      setInterval(t) {
          return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0)
      }
      clearInterval() {
          return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1
      }
      clearNextTick() {
          return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1
      }
      tick() {
          this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
      }
      tickImmediate() {
          this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
      }
      doTick() {}
  }
  const bn = {
      length: 0,
      start: () => 0,
      end: () => 0
  };
  class q {
      static isBuffered(t, e) {
          try {
              if (t) {
                  const s = q.getBuffered(t);
                  for (let i = 0; i < s.length; i++)
                      if (e >= s.start(i) && e <= s.end(i)) return !0
              }
          } catch {}
          return !1
      }
      static bufferInfo(t, e, s) {
          try {
              if (t) {
                  const i = q.getBuffered(t),
                      r = [];
                  let n;
                  for (n = 0; n < i.length; n++) r.push({
                      start: i.start(n),
                      end: i.end(n)
                  });
                  return this.bufferedInfo(r, e, s)
              }
          } catch {}
          return {
              len: 0,
              start: e,
              end: e,
              nextStart: void 0
          }
      }
      static bufferedInfo(t, e, s) {
          e = Math.max(0, e), t.sort(function(c, h) {
              const u = c.start - h.start;
              return u || h.end - c.end
          });
          let i = [];
          if (s)
              for (let c = 0; c < t.length; c++) {
                  const h = i.length;
                  if (h) {
                      const u = i[h - 1].end;
                      t[c].start - u < s ? t[c].end > u && (i[h - 1].end = t[c].end) : i.push(t[c])
                  } else i.push(t[c])
              } else i = t;
          let r = 0,
              n, o = e,
              l = e;
          for (let c = 0; c < i.length; c++) {
              const h = i[c].start,
                  u = i[c].end;
              if (e + s >= h && e < u) o = h, l = u, r = l - e;
              else if (e + s < h) {
                  n = h;
                  break
              }
          }
          return {
              len: r,
              start: o || 0,
              end: l || 0,
              nextStart: n
          }
      }
      static getBuffered(t) {
          try {
              return t.buffered
          } catch (e) {
              return x.log("failed to get media.buffered", e), bn
          }
      }
  }
  class Je {
      constructor(t, e, s, i = 0, r = -1, n = !1) {
          this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = zt(), this.buffering = {
              audio: zt(),
              video: zt(),
              audiovideo: zt()
          }, this.level = t, this.sn = e, this.id = s, this.size = i, this.part = r, this.partial = n
      }
  }
  
  function zt() {
      return {
          start: 0,
          executeStart: 0,
          executeEnd: 0,
          end: 0
      }
  }
  
  function bi(a, t) {
      let e = null;
      for (let s = 0, i = a.length; s < i; s++) {
          const r = a[s];
          if (r && r.cc === t) {
              e = r;
              break
          }
      }
      return e
  }
  
  function Dn(a, t, e) {
      return !!(t.details && (e.endCC > e.startCC || a && a.cc < e.startCC))
  }
  
  function Cn(a, t, e = 0) {
      const s = a.fragments,
          i = t.fragments;
      if (!i.length || !s.length) {
          x.log("No fragments to align");
          return
      }
      const r = bi(s, i[0].cc);
      if (!r || r && !r.startPTS) {
          x.log("No frag in previous level to align on");
          return
      }
      return r
  }
  
  function Ms(a, t) {
      if (a) {
          const e = a.start + t;
          a.start = a.startPTS = e, a.endPTS = e + a.duration
      }
  }
  
  function Ze(a, t) {
      const e = t.fragments;
      for (let s = 0, i = e.length; s < i; s++) Ms(e[s], a);
      t.fragmentHint && Ms(t.fragmentHint, a), t.alignedSliding = !0
  }
  
  function kn(a, t, e) {
      t && (_n(a, e, t), !e.alignedSliding && t.details && wn(e, t.details), !e.alignedSliding && t.details && !e.skippedSegments && Li(t.details, e))
  }
  
  function _n(a, t, e) {
      if (Dn(a, e, t)) {
          const s = Cn(e.details, t);
          s && F(s.start) && (x.log(`Adjusting PTS using last level due to CC increase within current level ${t.url}`), Ze(s.start, t))
      }
  }
  
  function wn(a, t) {
      if (!t.fragments.length || !a.hasProgramDateTime || !t.hasProgramDateTime) return;
      const e = t.fragments[0].programDateTime,
          s = a.fragments[0].programDateTime,
          i = (s - e) / 1e3 + t.fragments[0].start;
      i && F(i) && (x.log(`Adjusting PTS using programDateTime delta ${s-e}ms, sliding:${i.toFixed(3)} ${a.url} `), Ze(i, a))
  }
  
  function Di(a, t) {
      if (!a.hasProgramDateTime || !t.hasProgramDateTime) return;
      const e = a.fragments,
          s = t.fragments;
      if (!e.length || !s.length) return;
      const i = Math.round(s.length / 2) - 1,
          r = s[i],
          n = bi(e, r.cc) || e[Math.round(e.length / 2) - 1],
          o = r.programDateTime,
          l = n.programDateTime;
      if (o === null || l === null) return;
      const c = (l - o) / 1e3 - (n.start - r.start);
      Ze(c, a)
  }
  class Pn {
      constructor(t, e) {
          this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
      }
      decrypt(t, e) {
          return this.subtle.decrypt({
              name: "AES-CBC",
              iv: this.aesIV
          }, e, t)
      }
  }
  class Fn {
      constructor(t, e) {
          this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
      }
      expandKey() {
          return this.subtle.importKey("raw", this.key, {
              name: "AES-CBC"
          }, !1, ["encrypt", "decrypt"])
      }
  }
  
  function On(a) {
      const t = a.byteLength,
          e = t && new DataView(a.buffer).getUint8(t - 1);
      return e ? _t(a, 0, t - e) : a
  }
  class Mn {
      constructor() {
          this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
      }
      uint8ArrayToUint32Array_(t) {
          const e = new DataView(t),
              s = new Uint32Array(4);
          for (let i = 0; i < 4; i++) s[i] = e.getUint32(i * 4);
          return s
      }
      initTable() {
          const t = this.sBox,
              e = this.invSBox,
              s = this.subMix,
              i = s[0],
              r = s[1],
              n = s[2],
              o = s[3],
              l = this.invSubMix,
              c = l[0],
              h = l[1],
              u = l[2],
              d = l[3],
              f = new Uint32Array(256);
          let g = 0,
              p = 0,
              T = 0;
          for (T = 0; T < 256; T++) T < 128 ? f[T] = T << 1 : f[T] = T << 1 ^ 283;
          for (T = 0; T < 256; T++) {
              let y = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
              y = y >>> 8 ^ y & 255 ^ 99, t[g] = y, e[y] = g;
              const S = f[g],
                  E = f[S],
                  R = f[E];
              let A = f[y] * 257 ^ y * 16843008;
              i[g] = A << 24 | A >>> 8, r[g] = A << 16 | A >>> 16, n[g] = A << 8 | A >>> 24, o[g] = A, A = R * 16843009 ^ E * 65537 ^ S * 257 ^ g * 16843008, c[y] = A << 24 | A >>> 8, h[y] = A << 16 | A >>> 16, u[y] = A << 8 | A >>> 24, d[y] = A, g ? (g = S ^ f[f[f[R ^ S]]], p ^= f[f[p]]) : g = p = 1
          }
      }
      expandKey(t) {
          const e = this.uint8ArrayToUint32Array_(t);
          let s = !0,
              i = 0;
          for (; i < e.length && s;) s = e[i] === this.key[i], i++;
          if (s) return;
          this.key = e;
          const r = this.keySize = e.length;
          if (r !== 4 && r !== 6 && r !== 8) throw new Error("Invalid aes key size=" + r);
          const n = this.ksRows = (r + 6 + 1) * 4;
          let o, l;
          const c = this.keySchedule = new Uint32Array(n),
              h = this.invKeySchedule = new Uint32Array(n),
              u = this.sBox,
              d = this.rcon,
              f = this.invSubMix,
              g = f[0],
              p = f[1],
              T = f[2],
              y = f[3];
          let S, E;
          for (o = 0; o < n; o++) {
              if (o < r) {
                  S = c[o] = e[o];
                  continue
              }
              E = S, o % r === 0 ? (E = E << 8 | E >>> 24, E = u[E >>> 24] << 24 | u[E >>> 16 & 255] << 16 | u[E >>> 8 & 255] << 8 | u[E & 255], E ^= d[o / r | 0] << 24) : r > 6 && o % r === 4 && (E = u[E >>> 24] << 24 | u[E >>> 16 & 255] << 16 | u[E >>> 8 & 255] << 8 | u[E & 255]), c[o] = S = (c[o - r] ^ E) >>> 0
          }
          for (l = 0; l < n; l++) o = n - l, l & 3 ? E = c[o] : E = c[o - 4], l < 4 || o <= 4 ? h[l] = E : h[l] = g[u[E >>> 24]] ^ p[u[E >>> 16 & 255]] ^ T[u[E >>> 8 & 255]] ^ y[u[E & 255]], h[l] = h[l] >>> 0
      }
      networkToHostOrderSwap(t) {
          return t << 24 | (t & 65280) << 8 | (t & 16711680) >> 8 | t >>> 24
      }
      decrypt(t, e, s) {
          const i = this.keySize + 6,
              r = this.invKeySchedule,
              n = this.invSBox,
              o = this.invSubMix,
              l = o[0],
              c = o[1],
              h = o[2],
              u = o[3],
              d = this.uint8ArrayToUint32Array_(s);
          let f = d[0],
              g = d[1],
              p = d[2],
              T = d[3];
          const y = new Int32Array(t),
              S = new Int32Array(y.length);
          let E, R, A, _, D, C, k, I, O, w, V, nt, j, z;
          const X = this.networkToHostOrderSwap;
          for (; e < y.length;) {
              for (O = X(y[e]), w = X(y[e + 1]), V = X(y[e + 2]), nt = X(y[e + 3]), D = O ^ r[0], C = nt ^ r[1], k = V ^ r[2], I = w ^ r[3], j = 4, z = 1; z < i; z++) E = l[D >>> 24] ^ c[C >> 16 & 255] ^ h[k >> 8 & 255] ^ u[I & 255] ^ r[j], R = l[C >>> 24] ^ c[k >> 16 & 255] ^ h[I >> 8 & 255] ^ u[D & 255] ^ r[j + 1], A = l[k >>> 24] ^ c[I >> 16 & 255] ^ h[D >> 8 & 255] ^ u[C & 255] ^ r[j + 2], _ = l[I >>> 24] ^ c[D >> 16 & 255] ^ h[C >> 8 & 255] ^ u[k & 255] ^ r[j + 3], D = E, C = R, k = A, I = _, j = j + 4;
              E = n[D >>> 24] << 24 ^ n[C >> 16 & 255] << 16 ^ n[k >> 8 & 255] << 8 ^ n[I & 255] ^ r[j], R = n[C >>> 24] << 24 ^ n[k >> 16 & 255] << 16 ^ n[I >> 8 & 255] << 8 ^ n[D & 255] ^ r[j + 1], A = n[k >>> 24] << 24 ^ n[I >> 16 & 255] << 16 ^ n[D >> 8 & 255] << 8 ^ n[C & 255] ^ r[j + 2], _ = n[I >>> 24] << 24 ^ n[D >> 16 & 255] << 16 ^ n[C >> 8 & 255] << 8 ^ n[k & 255] ^ r[j + 3], S[e] = X(E ^ f), S[e + 1] = X(_ ^ g), S[e + 2] = X(A ^ p), S[e + 3] = X(R ^ T), f = O, g = w, p = V, T = nt, e = e + 4
          }
          return S.buffer
      }
  }
  const Nn = 16;
  class ts {
      constructor(t, {
          removePKCS7Padding: e = !0
      } = {}) {
          if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = e, e) try {
              const s = self.crypto;
              s && (this.subtle = s.subtle || s.webkitSubtle)
          } catch {}
          this.subtle === null && (this.useSoftware = !0)
      }
      destroy() {
          this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null
      }
      isSync() {
          return this.useSoftware
      }
      flush() {
          const {
              currentResult: t,
              remainderData: e
          } = this;
          if (!t || e) return this.reset(), null;
          const s = new Uint8Array(t);
          return this.reset(), this.removePKCS7Padding ? On(s) : s
      }
      reset() {
          this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
      }
      decrypt(t, e, s) {
          return this.useSoftware ? new Promise((i, r) => {
              this.softwareDecrypt(new Uint8Array(t), e, s);
              const n = this.flush();
              n ? i(n.buffer) : r(new Error("[softwareDecrypt] Failed to decrypt data"))
          }) : this.webCryptoDecrypt(new Uint8Array(t), e, s)
      }
      softwareDecrypt(t, e, s) {
          const {
              currentIV: i,
              currentResult: r,
              remainderData: n
          } = this;
          this.logOnce("JS AES decrypt"), n && (t = wt(n, t), this.remainderData = null);
          const o = this.getValidChunk(t);
          if (!o.length) return null;
          i && (s = i);
          let l = this.softwareDecrypter;
          l || (l = this.softwareDecrypter = new Mn), l.expandKey(e);
          const c = r;
          return this.currentResult = l.decrypt(o.buffer, 0, s), this.currentIV = _t(o, -16).buffer, c || null
      }
      webCryptoDecrypt(t, e, s) {
          const i = this.subtle;
          return (this.key !== e || !this.fastAesKey) && (this.key = e, this.fastAesKey = new Fn(i, e)), this.fastAesKey.expandKey().then(r => i ? (this.logOnce("WebCrypto AES decrypt"), new Pn(i, new Uint8Array(s)).decrypt(t.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch(r => (x.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(t, e, s)))
      }
      onWebCryptoError(t, e, s) {
          this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(t, e, s);
          const i = this.flush();
          if (i) return i.buffer;
          throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")
      }
      getValidChunk(t) {
          let e = t;
          const s = t.length - t.length % Nn;
          return s !== t.length && (e = _t(t, 0, s), this.remainderData = _t(t, s)), e
      }
      logOnce(t) {
          this.logEnabled && (x.log(`[decrypter]: ${t}`), this.logEnabled = !1)
      }
  }
  const Un = {
          toString: function(a) {
              let t = "";
              const e = a.length;
              for (let s = 0; s < e; s++) t += `[${a.start(s).toFixed(3)}-${a.end(s).toFixed(3)}]`;
              return t
          }
      },
      b = {
          STOPPED: "STOPPED",
          IDLE: "IDLE",
          KEY_LOADING: "KEY_LOADING",
          FRAG_LOADING: "FRAG_LOADING",
          FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
          WAITING_TRACK: "WAITING_TRACK",
          PARSING: "PARSING",
          PARSED: "PARSED",
          ENDED: "ENDED",
          ERROR: "ERROR",
          WAITING_INIT_PTS: "WAITING_INIT_PTS",
          WAITING_LEVEL: "WAITING_LEVEL"
      };
  class es extends In {
      constructor(t, e, s, i, r) {
          super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = b.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = i, this.log = x.log.bind(x, `${i}:`), this.warn = x.warn.bind(x, `${i}:`), this.hls = t, this.fragmentLoader = new Ln(t.config), this.keyLoader = s, this.fragmentTracker = e, this.config = t.config, this.decrypter = new ts(t.config), t.on(m.MANIFEST_LOADED, this.onManifestLoaded, this)
      }
      doTick() {
          this.onTickEnd()
      }
      onTickEnd() {}
      startLoad(t) {}
      stopLoad() {
          this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
          const t = this.fragCurrent;
          t != null && t.loader && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = b.STOPPED
      }
      _streamEnded(t, e) {
          if (e.live || t.nextStart || !t.end || !this.media) return !1;
          const s = e.partList;
          if (s != null && s.length) {
              const r = s[s.length - 1];
              return q.isBuffered(this.media, r.start + r.duration / 2)
          }
          const i = e.fragments[e.fragments.length - 1].type;
          return this.fragmentTracker.isEndListAppended(i)
      }
      getLevelDetails() {
          if (this.levels && this.levelLastLoaded !== null) {
              var t;
              return (t = this.levels[this.levelLastLoaded]) == null ? void 0 : t.details
          }
      }
      onMediaAttached(t, e) {
          const s = this.media = this.mediaBuffer = e.media;
          this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), s.addEventListener("seeking", this.onvseeking), s.addEventListener("ended", this.onvended);
          const i = this.config;
          this.levels && i.autoStartLoad && this.state === b.STOPPED && this.startLoad(i.startPosition)
      }
      onMediaDetaching() {
          const t = this.media;
          t != null && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && this.onvseeking && this.onvended && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
      }
      onMediaSeeking() {
          const {
              config: t,
              fragCurrent: e,
              media: s,
              mediaBuffer: i,
              state: r
          } = this, n = s ? s.currentTime : 0, o = q.bufferInfo(i || s, n, t.maxBufferHole);
          if (this.log(`media seeking to ${F(n)?n.toFixed(3):n}, state: ${r}`), this.state === b.ENDED) this.resetLoadingState();
          else if (e) {
              const l = t.maxFragLookUpTolerance,
                  c = e.start - l,
                  h = e.start + e.duration + l;
              if (!o.len || h < o.start || c > o.end) {
                  const u = n > h;
                  (n < c || u) && (u && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.abortRequests(), this.resetLoadingState()), this.fragPrevious = null)
              }
          }
          s && (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, !0), this.lastCurrentTime = n), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = n), this.tickImmediate()
      }
      onMediaEnded() {
          this.startPosition = this.lastCurrentTime = 0
      }
      onManifestLoaded(t, e) {
          this.startTimeOffset = e.startTimeOffset, this.initPTS = []
      }
      onHandlerDestroying() {
          this.stopLoad(), super.onHandlerDestroying()
      }
      onHandlerDestroyed() {
          this.state = b.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed()
      }
      loadFragment(t, e, s) {
          this._loadFragForPlayback(t, e, s)
      }
      _loadFragForPlayback(t, e, s) {
          const i = r => {
              if (this.fragContextChanged(t)) {
                  this.warn(`Fragment ${t.sn}${r.part?" p: "+r.part.index:""} of level ${t.level} was dropped during download.`), this.fragmentTracker.removeFragment(t);
                  return
              }
              t.stats.chunkCount++, this._handleFragmentLoadProgress(r)
          };
          this._doFragLoad(t, e, s, i).then(r => {
              if (!r) return;
              const n = this.state;
              if (this.fragContextChanged(t)) {
                  (n === b.FRAG_LOADING || !this.fragCurrent && n === b.PARSING) && (this.fragmentTracker.removeFragment(t), this.state = b.IDLE);
                  return
              }
              "payload" in r && (this.log(`Loaded fragment ${t.sn} of level ${t.level}`), this.hls.trigger(m.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r)
          }).catch(r => {
              this.state === b.STOPPED || this.state === b.ERROR || (this.warn(r), this.resetFragmentLoading(t))
          })
      }
      clearTrackerIfNeeded(t) {
          var e;
          const {
              fragmentTracker: s
          } = this;
          if (s.getState(t) === et.APPENDING) {
              const r = t.type,
                  n = this.getFwdBufferInfo(this.mediaBuffer, r),
                  o = Math.max(t.duration, n ? n.len : this.config.maxBufferLength);
              this.reduceMaxBufferLength(o) && s.removeFragment(t)
          } else((e = this.mediaBuffer) == null ? void 0 : e.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(t.type) && (s.detectPartialFragments({
              frag: t,
              part: null,
              stats: t.stats,
              id: t.type
          }), s.getState(t) === et.PARTIAL && s.removeFragment(t))
      }
      checkLiveUpdate(t) {
          if (t.updated && !t.live) {
              const e = t.fragments[t.fragments.length - 1];
              this.fragmentTracker.detectPartialFragments({
                  frag: e,
                  part: null,
                  stats: e.stats,
                  id: e.type
              })
          }
          t.fragments[0] || (t.deltaUpdateFailed = !0)
      }
      flushMainBuffer(t, e, s = null) {
          if (!(t - e)) return;
          const i = {
              startOffset: t,
              endOffset: e,
              type: s
          };
          this.hls.trigger(m.BUFFER_FLUSHING, i)
      }
      _loadInitSegment(t, e) {
          this._doFragLoad(t, e).then(s => {
              if (!s || this.fragContextChanged(t) || !this.levels) throw new Error("init load aborted");
              return s
          }).then(s => {
              const {
                  hls: i
              } = this, {
                  payload: r
              } = s, n = t.decryptdata;
              if (r && r.byteLength > 0 && n && n.key && n.iv && n.method === "AES-128") {
                  const o = self.performance.now();
                  return this.decrypter.decrypt(new Uint8Array(r), n.key.buffer, n.iv.buffer).catch(l => {
                      throw i.trigger(m.ERROR, {
                          type: N.MEDIA_ERROR,
                          details: L.FRAG_DECRYPT_ERROR,
                          fatal: !1,
                          error: l,
                          reason: l.message,
                          frag: t
                      }), l
                  }).then(l => {
                      const c = self.performance.now();
                      return i.trigger(m.FRAG_DECRYPTED, {
                          frag: t,
                          payload: l,
                          stats: {
                              tstart: o,
                              tdecrypt: c
                          }
                      }), s.payload = l, s
                  })
              }
              return s
          }).then(s => {
              const {
                  fragCurrent: i,
                  hls: r,
                  levels: n
              } = this;
              if (!n) throw new Error("init load aborted, missing levels");
              const o = t.stats;
              this.state = b.IDLE, e.fragmentError = 0, t.data = new Uint8Array(s.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), s.frag === i && r.trigger(m.FRAG_BUFFERED, {
                  stats: o,
                  frag: i,
                  part: null,
                  id: t.type
              }), this.tick()
          }).catch(s => {
              this.state === b.STOPPED || this.state === b.ERROR || (this.warn(s), this.resetFragmentLoading(t))
          })
      }
      fragContextChanged(t) {
          const {
              fragCurrent: e
          } = this;
          return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
      }
      fragBufferedComplete(t, e) {
          var s, i, r, n;
          const o = this.mediaBuffer ? this.mediaBuffer : this.media;
          this.log(`Buffered ${t.type} sn: ${t.sn}${e?" part: "+e.index:""} of ${this.playlistType===U.MAIN?"level":"track"} ${t.level} (frag:[${((s=t.startPTS)!=null?s:NaN).toFixed(3)}-${((i=t.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${o?Un.toString(q.getBuffered(o)):"(detached)"})`), this.state = b.IDLE, o && (!this.loadedmetadata && t.type == U.MAIN && o.buffered.length && ((r = this.fragCurrent) == null ? void 0 : r.sn) === ((n = this.fragPrevious) == null ? void 0 : n.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick())
      }
      seekToStartPos() {}
      _handleFragmentLoadComplete(t) {
          const {
              transmuxer: e
          } = this;
          if (!e) return;
          const {
              frag: s,
              part: i,
              partsLoaded: r
          } = t, n = !r || r.length === 0 || r.some(l => !l), o = new Je(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
          e.flush(o)
      }
      _handleFragmentLoadProgress(t) {}
      _doFragLoad(t, e, s = null, i) {
          var r;
          const n = e == null ? void 0 : e.details;
          if (!this.levels || !n) throw new Error(`frag load aborted, missing level${n?"":" detail"}s`);
          let o = null;
          if (t.encrypted && !((r = t.decryptdata) != null && r.key) ? (this.log(`Loading key for ${t.sn} of [${n.startSN}-${n.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${t.level}`), this.state = b.KEY_LOADING, this.fragCurrent = t, o = this.keyLoader.load(t).then(h => {
                  if (!this.fragContextChanged(h.frag)) return this.hls.trigger(m.KEY_LOADED, h), this.state === b.KEY_LOADING && (this.state = b.IDLE), h
              }), this.hls.trigger(m.KEY_LOADING, {
                  frag: t
              }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !t.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(t, n.encryptedFragments), s = Math.max(t.start, s || 0), this.config.lowLatencyMode && t.sn !== "initSegment") {
              const h = n.partList;
              if (h && i) {
                  s > t.end && n.fragmentHint && (t = n.fragmentHint);
                  const u = this.getNextPart(h, t, s);
                  if (u > -1) {
                      const d = h[u];
                      this.log(`Loading part sn: ${t.sn} p: ${d.index} cc: ${t.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${u}-${h.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = d.start + d.duration, this.state = b.FRAG_LOADING;
                      let f;
                      return o ? f = o.then(g => !g || this.fragContextChanged(g.frag) ? null : this.doFragPartsLoad(t, d, e, i)).catch(g => this.handleFragLoadError(g)) : f = this.doFragPartsLoad(t, d, e, i).catch(g => this.handleFragLoadError(g)), this.hls.trigger(m.FRAG_LOADING, {
                          frag: t,
                          part: d,
                          targetBufferTime: s
                      }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f
                  } else if (!t.url || this.loadedEndOfParts(h, s)) return Promise.resolve(null)
              }
          }
          this.log(`Loading fragment ${t.sn} cc: ${t.cc} ${n?"of ["+n.startSN+"-"+n.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${t.level}, target: ${parseFloat(s.toFixed(3))}`), F(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = b.FRAG_LOADING;
          const l = this.config.progressive;
          let c;
          return l && o ? c = o.then(h => !h || this.fragContextChanged(h == null ? void 0 : h.frag) ? null : this.fragmentLoader.load(t, i)).catch(h => this.handleFragLoadError(h)) : c = Promise.all([this.fragmentLoader.load(t, l ? i : void 0), o]).then(([h]) => (!l && h && i && i(h), h)).catch(h => this.handleFragLoadError(h)), this.hls.trigger(m.FRAG_LOADING, {
              frag: t,
              targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c
      }
      doFragPartsLoad(t, e, s, i) {
          return new Promise((r, n) => {
              var o;
              const l = [],
                  c = (o = s.details) == null ? void 0 : o.partList,
                  h = u => {
                      this.fragmentLoader.loadPart(t, u, i).then(d => {
                          l[u.index] = d;
                          const f = d.part;
                          this.hls.trigger(m.FRAG_LOADED, d);
                          const g = Cs(s, t.sn, u.index + 1) || Ri(c, t.sn, u.index + 1);
                          if (g) h(g);
                          else return r({
                              frag: t,
                              part: f,
                              partsLoaded: l
                          })
                      }).catch(n)
                  };
              h(e)
          })
      }
      handleFragLoadError(t) {
          if ("data" in t) {
              const e = t.data;
              t.data && e.details === L.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(m.ERROR, e)
          } else this.hls.trigger(m.ERROR, {
              type: N.OTHER_ERROR,
              details: L.INTERNAL_EXCEPTION,
              err: t,
              error: t,
              fatal: !0
          });
          return null
      }
      _handleTransmuxerFlush(t) {
          const e = this.getCurrentContext(t);
          if (!e || this.state !== b.PARSING) {
              !this.fragCurrent && this.state !== b.STOPPED && this.state !== b.ERROR && (this.state = b.IDLE);
              return
          }
          const {
              frag: s,
              part: i,
              level: r
          } = e, n = self.performance.now();
          s.stats.parsing.end = n, i && (i.stats.parsing.end = n), this.updateLevelTiming(s, i, r, t.partial)
      }
      getCurrentContext(t) {
          const {
              levels: e,
              fragCurrent: s
          } = this, {
              level: i,
              sn: r,
              part: n
          } = t;
          if (!(e != null && e[i])) return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`), null;
          const o = e[i],
              l = n > -1 ? Cs(o, r, n) : null,
              c = l ? l.fragment : gn(o, r, s);
          return c ? (s && s !== c && (c.stats = s.stats), {
              frag: c,
              part: l,
              level: o
          }) : null
      }
      bufferFragmentData(t, e, s, i, r) {
          var n;
          if (!t || this.state !== b.PARSING) return;
          const {
              data1: o,
              data2: l
          } = t;
          let c = o;
          if (o && l && (c = wt(o, l)), !((n = c) != null && n.length)) return;
          const h = {
              type: t.type,
              frag: e,
              part: s,
              chunkMeta: i,
              parent: e.type,
              data: c
          };
          if (this.hls.trigger(m.BUFFER_APPENDING, h), t.dropped && t.independent && !s) {
              if (r) return;
              this.flushBufferGap(e)
          }
      }
      flushBufferGap(t) {
          const e = this.media;
          if (!e) return;
          if (!q.isBuffered(e, e.currentTime)) {
              this.flushMainBuffer(0, t.start);
              return
          }
          const s = e.currentTime,
              i = q.bufferInfo(e, s, 0),
              r = t.duration,
              n = Math.min(this.config.maxFragLookUpTolerance * 2, r * .25),
              o = Math.max(Math.min(t.start - n, i.end - n), s + n);
          t.start - o > n && this.flushMainBuffer(o, t.start)
      }
      getFwdBufferInfo(t, e) {
          const s = this.getLoadPosition();
          return F(s) ? this.getFwdBufferInfoAtPos(t, s, e) : null
      }
      getFwdBufferInfoAtPos(t, e, s) {
          const {
              config: {
                  maxBufferHole: i
              }
          } = this, r = q.bufferInfo(t, e, i);
          if (r.len === 0 && r.nextStart !== void 0) {
              const n = this.fragmentTracker.getBufferedFrag(e, s);
              if (n && r.nextStart < n.end) return q.bufferInfo(t, e, Math.max(r.nextStart, i))
          }
          return r
      }
      getMaxBufferLength(t) {
          const {
              config: e
          } = this;
          let s;
          return t ? s = Math.max(8 * e.maxBufferSize / t, e.maxBufferLength) : s = e.maxBufferLength, Math.min(s, e.maxMaxBufferLength)
      }
      reduceMaxBufferLength(t) {
          const e = this.config,
              s = t || e.maxBufferLength;
          return e.maxMaxBufferLength >= s ? (e.maxMaxBufferLength /= 2, this.warn(`Reduce max buffer length to ${e.maxMaxBufferLength}s`), !0) : !1
      }
      getAppendedFrag(t, e = U.MAIN) {
          const s = this.fragmentTracker.getAppendedFrag(t, U.MAIN);
          return s && "fragment" in s ? s.fragment : s
      }
      getNextFragment(t, e) {
          const s = e.fragments,
              i = s.length;
          if (!i) return null;
          const {
              config: r
          } = this, n = s[0].start;
          let o;
          if (e.live) {
              const l = r.initialLiveManifestSize;
              if (i < l) return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`), null;
              !e.PTSKnown && !this.startFragRequested && this.startPosition === -1 && (o = this.getInitialLiveFragment(e, s), this.startPosition = o ? this.hls.liveSyncPosition || o.start : t)
          } else t <= n && (o = s[0]);
          if (!o) {
              const l = r.lowLatencyMode ? e.partEnd : e.fragmentEnd;
              o = this.getFragmentAtPosition(t, l, e)
          }
          return this.mapToInitFragWhenRequired(o)
      }
      isLoopLoading(t, e) {
          const s = this.fragmentTracker.getState(t);
          return (s === et.OK || s === et.PARTIAL && !!t.gap) && this.nextLoadPosition > e
      }
      getNextFragmentLoopLoading(t, e, s, i, r) {
          const n = t.gap,
              o = this.getNextFragment(this.nextLoadPosition, e);
          if (o === null) return o;
          if (t = o, n && t && !t.gap && s.nextStart) {
              const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i);
              if (l !== null && s.len + l.len >= r) return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${t.sn}`), null
          }
          return t
      }
      mapToInitFragWhenRequired(t) {
          return t != null && t.initSegment && !(t != null && t.initSegment.data) && !this.bitrateTest ? t.initSegment : t
      }
      getNextPart(t, e, s) {
          let i = -1,
              r = !1,
              n = !0;
          for (let o = 0, l = t.length; o < l; o++) {
              const c = t[o];
              if (n = n && !c.independent, i > -1 && s < c.start) break;
              const h = c.loaded;
              h ? i = -1 : (r || c.independent || n) && c.fragment === e && (i = o), r = h
          }
          return i
      }
      loadedEndOfParts(t, e) {
          const s = t[t.length - 1];
          return s && e > s.start && s.loaded
      }
      getInitialLiveFragment(t, e) {
          const s = this.fragPrevious;
          let i = null;
          if (s) {
              if (t.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = pn(e, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                  const r = s.sn + 1;
                  if (r >= t.startSN && r <= t.endSN) {
                      const n = e[r - t.startSN];
                      s.cc === n.cc && (i = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))
                  }
                  i || (i = yn(e, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))
              }
          } else {
              const r = this.hls.liveSyncPosition;
              r !== null && (i = this.getFragmentAtPosition(r, this.bitrateTest ? t.fragmentEnd : t.edge, t))
          }
          return i
      }
      getFragmentAtPosition(t, e, s) {
          const {
              config: i
          } = this;
          let {
              fragPrevious: r
          } = this, {
              fragments: n,
              endSN: o
          } = s;
          const {
              fragmentHint: l
          } = s, c = i.maxFragLookUpTolerance, h = s.partList, u = !!(i.lowLatencyMode && h != null && h.length && l);
          u && l && !this.bitrateTest && (n = n.concat(l), o = l.sn);
          let d;
          if (t < e) {
              const f = t > e - c ? 0 : c;
              d = Yt(r, n, t, f)
          } else d = n[n.length - 1];
          if (d) {
              const f = d.sn - s.startSN,
                  g = this.fragmentTracker.getState(d);
              if ((g === et.OK || g === et.PARTIAL && d.gap) && (r = d), r && d.sn === r.sn && (!u || h[0].fragment.sn > d.sn) && r && d.level === r.level) {
                  const T = n[f + 1];
                  d.sn < o && this.fragmentTracker.getState(T) !== et.OK ? d = T : d = null
              }
          }
          return d
      }
      synchronizeToLiveEdge(t) {
          const {
              config: e,
              media: s
          } = this;
          if (!s) return;
          const i = this.hls.liveSyncPosition,
              r = s.currentTime,
              n = t.fragments[0].start,
              o = t.edge,
              l = r >= n - e.maxFragLookUpTolerance && r <= o;
          if (i !== null && s.duration > i && (r < i || !l)) {
              const c = e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
              (!l && s.readyState < 4 || r < o - c) && (this.loadedmetadata || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i))
          }
      }
      alignPlaylists(t, e) {
          const {
              levels: s,
              levelLastLoaded: i,
              fragPrevious: r
          } = this, n = i !== null ? s[i] : null, o = t.fragments.length;
          if (!o) return this.warn("No fragments in live playlist"), 0;
          const l = t.fragments[0].start,
              c = !e,
              h = t.alignedSliding && F(l);
          if (c || !h && !l) {
              kn(r, n, t);
              const u = t.fragments[0].start;
              return this.log(`Live playlist sliding: ${u.toFixed(2)} start-sn: ${e?e.startSN:"na"}->${t.startSN} prev-sn: ${r?r.sn:"na"} fragments: ${o}`), u
          }
          return l
      }
      waitForCdnTuneIn(t) {
          return t.live && t.canBlockReload && t.partTarget && t.tuneInGoal > Math.max(t.partHoldBack, t.partTarget * 3)
      }
      setStartPosition(t, e) {
          let s = this.startPosition;
          if (s < e && (s = -1), s === -1 || this.lastCurrentTime === -1) {
              const i = this.startTimeOffset !== null,
                  r = i ? this.startTimeOffset : t.startTimeOffset;
              r !== null && F(r) ? (s = e + r, r < 0 && (s += t.totalduration), s = Math.min(Math.max(e, s), e + t.totalduration), this.log(`Start time offset ${r} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${s}`), this.startPosition = s) : t.live ? s = this.hls.liveSyncPosition || e : this.startPosition = s = 0, this.lastCurrentTime = s
          }
          this.nextLoadPosition = s
      }
      getLoadPosition() {
          const {
              media: t
          } = this;
          let e = 0;
          return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
      }
      handleFragLoadAborted(t, e) {
          this.transmuxer && t.sn !== "initSegment" && t.stats.aborted && (this.warn(`Fragment ${t.sn}${e?" part "+e.index:""} of level ${t.level} was aborted`), this.resetFragmentLoading(t))
      }
      resetFragmentLoading(t) {
          (!this.fragCurrent || !this.fragContextChanged(t) && this.state !== b.FRAG_LOADING_WAITING_RETRY) && (this.state = b.IDLE)
      }
      onFragmentOrKeyLoadError(t, e) {
          if (e.chunkMeta && !e.frag) {
              const u = this.getCurrentContext(e.chunkMeta);
              u && (e.frag = u.frag)
          }
          const s = e.frag;
          if (!s || s.type !== t || !this.levels) return;
          if (this.fragContextChanged(s)) {
              var i;
              this.warn(`Frag load error must match current frag to retry ${s.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);
              return
          }
          const r = e.details === L.FRAG_GAP;
          r && this.fragmentTracker.fragBuffered(s, !0);
          const n = e.errorAction,
              {
                  action: o,
                  retryCount: l = 0,
                  retryConfig: c
              } = n || {};
          if (n && o === rt.RetryRequest && c) {
              var h;
              this.resetStartWhenNotLoaded((h = this.levelLastLoaded) != null ? h : s.level);
              const u = ze(c, l);
              this.warn(`Fragment ${s.sn} of ${t} ${s.level} errored with ${e.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${u}ms`), n.resolved = !0, this.retryDate = self.performance.now() + u, this.state = b.FRAG_LOADING_WAITING_RETRY
          } else c && n ? (this.resetFragmentErrors(t), l < c.maxNumRetry ? r || (n.resolved = !0) : x.warn(`${e.details} reached or exceeded max retry (${l})`)) : (n == null ? void 0 : n.action) === rt.SendAlternateToPenaltyBox ? this.state = b.WAITING_LEVEL : this.state = b.ERROR;
          this.tickImmediate()
      }
      reduceLengthAndFlushBuffer(t) {
          if (this.state === b.PARSING || this.state === b.PARSED) {
              const e = t.parent,
                  s = this.getFwdBufferInfo(this.mediaBuffer, e),
                  i = s && s.len > .5;
              i && this.reduceMaxBufferLength(s.len);
              const r = !i;
              return r && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${e} buffer`), t.frag && (this.fragmentTracker.removeFragment(t.frag), this.nextLoadPosition = t.frag.start), this.resetLoadingState(), r
          }
          return !1
      }
      resetFragmentErrors(t) {
          t === U.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== b.STOPPED && (this.state = b.IDLE)
      }
      afterBufferFlushed(t, e, s) {
          if (!t) return;
          const i = q.getBuffered(t);
          this.fragmentTracker.detectEvictedFragments(e, i, s), this.state === b.ENDED && this.resetLoadingState()
      }
      resetLoadingState() {
          this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = b.IDLE
      }
      resetStartWhenNotLoaded(t) {
          if (!this.loadedmetadata) {
              this.startFragRequested = !1;
              const e = this.levels ? this.levels[t].details : null;
              e != null && e.live ? (this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition
          }
      }
      resetWhenMissingContext(t) {
          var e;
          this.warn(`The loading context changed while buffering fragment ${t.sn} of level ${t.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded((e = this.levelLastLoaded) != null ? e : t.level), this.resetLoadingState()
      }
      removeUnbufferedFrags(t = 0) {
          this.fragmentTracker.removeFragmentsInRange(t, 1 / 0, this.playlistType, !1, !0)
      }
      updateLevelTiming(t, e, s, i) {
          var r;
          const n = s.details;
          if (!n) {
              this.warn("level.details undefined");
              return
          }
          if (Object.keys(t.elementaryStreams).reduce((l, c) => {
                  const h = t.elementaryStreams[c];
                  if (h) {
                      const u = h.endPTS - h.startPTS;
                      if (u <= 0) return this.warn(`Could not parse fragment ${t.sn} ${c} duration reliably (${u})`), l || !1;
                      const d = i ? 0 : Ai(n, t, h.startPTS, h.endPTS, h.startDTS, h.endDTS);
                      return this.hls.trigger(m.LEVEL_PTS_UPDATED, {
                          details: n,
                          level: s,
                          drift: d,
                          type: c,
                          frag: t,
                          start: h.startPTS,
                          end: h.endPTS
                      }), !0
                  }
                  return l
              }, !1)) s.fragmentError = 0;
          else if (((r = this.transmuxer) == null ? void 0 : r.error) === null) {
              const l = new Error(`Found no media in fragment ${t.sn} of level ${t.level} resetting transmuxer to fallback to playlist timing`);
              if (s.fragmentError === 0 && (s.fragmentError++, t.gap = !0, this.fragmentTracker.removeFragment(t), this.fragmentTracker.fragBuffered(t, !0)), this.warn(l.message), this.hls.trigger(m.ERROR, {
                      type: N.MEDIA_ERROR,
                      details: L.FRAG_PARSING_ERROR,
                      fatal: !1,
                      error: l,
                      frag: t,
                      reason: `Found no media in msn ${t.sn} of level "${s.url}"`
                  }), !this.hls) return;
              this.resetTransmuxer()
          }
          this.state = b.PARSED, this.hls.trigger(m.FRAG_PARSED, {
              frag: t,
              part: e
          })
      }
      resetTransmuxer() {
          this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
      }
      recoverWorkerError(t) {
          if (t.event === "demuxerWorker") {
              var e, s, i;
              this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded((e = (s = this.levelLastLoaded) != null ? s : (i = this.fragCurrent) == null ? void 0 : i.level) != null ? e : 0), this.resetLoadingState()
          }
      }
      set state(t) {
          const e = this._state;
          e !== t && (this._state = t, this.log(`${e}->${t}`))
      }
      get state() {
          return this._state
      }
  }
  
  function Ci() {
      return self.SourceBuffer || self.WebKitSourceBuffer
  }
  
  function Bn() {
      const a = de();
      if (!a) return !1;
      const t = Ci(),
          e = a && typeof a.isTypeSupported == "function" && a.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
          s = !t || t.prototype && typeof t.prototype.appendBuffer == "function" && typeof t.prototype.remove == "function";
      return !!e && !!s
  }
  
  function $n() {
      var a;
      const t = Ci();
      return typeof(t == null || (a = t.prototype) == null ? void 0 : a.changeType) == "function"
  }
  
  function Gn() {
      return typeof __HLS_WORKER_BUNDLE__ == "function"
  }
  
  function Kn() {
      const a = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
              type: "text/javascript"
          }),
          t = self.URL.createObjectURL(a);
      return {
          worker: new self.Worker(t),
          objectURL: t
      }
  }
  
  function Hn(a) {
      const t = new self.URL(a, self.location.href).href;
      return {
          worker: new self.Worker(t),
          scriptURL: t
      }
  }
  
  function Et(a = "", t = 9e4) {
      return {
          type: a,
          id: -1,
          pid: -1,
          inputTimeScale: t,
          sequenceNumber: -1,
          samples: [],
          dropped: 0
      }
  }
  class ki {
      constructor() {
          this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null
      }
      resetInitSegment(t, e, s, i) {
          this._id3Track = {
              type: "id3",
              id: 3,
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0
          }
      }
      resetTimeStamp(t) {
          this.initPTS = t, this.resetContiguity()
      }
      resetContiguity() {
          this.basePTS = null, this.lastPTS = null, this.frameIndex = 0
      }
      canParse(t, e) {
          return !1
      }
      appendFrame(t, e, s) {}
      demux(t, e) {
          this.cachedData && (t = wt(this.cachedData, t), this.cachedData = null);
          let s = re(t, 0),
              i = s ? s.length : 0,
              r;
          const n = this._audioTrack,
              o = this._id3Track,
              l = s ? Lr(s) : void 0,
              c = t.length;
          for ((this.basePTS === null || this.frameIndex === 0 && F(l)) && (this.basePTS = Vn(l, e, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
                  pts: this.lastPTS,
                  dts: this.lastPTS,
                  data: s,
                  type: Tt.audioId3,
                  duration: Number.POSITIVE_INFINITY
              }); i < c;) {
              if (this.canParse(t, i)) {
                  const h = this.appendFrame(n, t, i);
                  h ? (this.frameIndex++, this.lastPTS = h.sample.pts, i += h.length, r = i) : i = c
              } else Ar(t, i) ? (s = re(t, i), o.samples.push({
                  pts: this.lastPTS,
                  dts: this.lastPTS,
                  data: s,
                  type: Tt.audioId3,
                  duration: Number.POSITIVE_INFINITY
              }), i += s.length, r = i) : i++;
              if (i === c && r !== c) {
                  const h = _t(t, r);
                  this.cachedData ? this.cachedData = wt(this.cachedData, h) : this.cachedData = h
              }
          }
          return {
              audioTrack: n,
              videoTrack: Et(),
              id3Track: o,
              textTrack: Et()
          }
      }
      demuxSampleAes(t, e, s) {
          return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))
      }
      flush(t) {
          const e = this.cachedData;
          return e && (this.cachedData = null, this.demux(e, 0)), {
              audioTrack: this._audioTrack,
              videoTrack: Et(),
              id3Track: this._id3Track,
              textTrack: Et()
          }
      }
      destroy() {}
  }
  const Vn = (a, t, e) => {
      if (F(a)) return a * 90;
      const s = e ? e.baseTime * 9e4 / e.timescale : 0;
      return t * 9e4 + s
  };
  
  function Wn(a, t, e, s) {
      let i, r, n, o;
      const l = navigator.userAgent.toLowerCase(),
          c = s,
          h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
      i = ((t[e + 2] & 192) >>> 6) + 1;
      const u = (t[e + 2] & 60) >>> 2;
      if (u > h.length - 1) {
          a.trigger(m.ERROR, {
              type: N.MEDIA_ERROR,
              details: L.FRAG_PARSING_ERROR,
              fatal: !0,
              reason: `invalid ADTS sampling index:${u}`
          });
          return
      }
      return n = (t[e + 2] & 1) << 2, n |= (t[e + 3] & 192) >>> 6, x.log(`manifest codec:${s}, ADTS type:${i}, samplingIndex:${u}`), /firefox/i.test(l) ? u >= 6 ? (i = 5, o = new Array(4), r = u - 3) : (i = 2, o = new Array(2), r = u) : l.indexOf("android") !== -1 ? (i = 2, o = new Array(2), r = u) : (i = 5, o = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && u >= 6 ? r = u - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (u >= 6 && n === 1 || /vivaldi/i.test(l)) || !s && n === 1) && (i = 2, o = new Array(2)), r = u)), o[0] = i << 3, o[0] |= (u & 14) >> 1, o[1] |= (u & 1) << 7, o[1] |= n << 3, i === 5 && (o[1] |= (r & 14) >> 1, o[2] = (r & 1) << 7, o[2] |= 8, o[3] = 0), {
          config: o,
          samplerate: h[u],
          channelCount: n,
          codec: "mp4a.40." + i,
          manifestCodec: c
      }
  }
  
  function _i(a, t) {
      return a[t] === 255 && (a[t + 1] & 246) === 240
  }
  
  function wi(a, t) {
      return a[t + 1] & 1 ? 7 : 9
  }
  
  function ss(a, t) {
      return (a[t + 3] & 3) << 11 | a[t + 4] << 3 | (a[t + 5] & 224) >>> 5
  }
  
  function Yn(a, t) {
      return t + 5 < a.length
  }
  
  function ce(a, t) {
      return t + 1 < a.length && _i(a, t)
  }
  
  function qn(a, t) {
      return Yn(a, t) && _i(a, t) && ss(a, t) <= a.length - t
  }
  
  function jn(a, t) {
      if (ce(a, t)) {
          const e = wi(a, t);
          if (t + e >= a.length) return !1;
          const s = ss(a, t);
          if (s <= e) return !1;
          const i = t + s;
          return i === a.length || ce(a, i)
      }
      return !1
  }
  
  function Pi(a, t, e, s, i) {
      if (!a.samplerate) {
          const r = Wn(t, e, s, i);
          if (!r) return;
          a.config = r.config, a.samplerate = r.samplerate, a.channelCount = r.channelCount, a.codec = r.codec, a.manifestCodec = r.manifestCodec, x.log(`parsed codec:${a.codec}, rate:${r.samplerate}, channels:${r.channelCount}`)
      }
  }
  
  function Fi(a) {
      return 1024 * 9e4 / a
  }
  
  function Xn(a, t) {
      const e = wi(a, t);
      if (t + e <= a.length) {
          const s = ss(a, t) - e;
          if (s > 0) return {
              headerLength: e,
              frameLength: s
          }
      }
  }
  
  function Oi(a, t, e, s, i) {
      const r = Fi(a.samplerate),
          n = s + i * r,
          o = Xn(t, e);
      let l;
      if (o) {
          const {
              frameLength: u,
              headerLength: d
          } = o, f = d + u, g = Math.max(0, e + f - t.length);
          g ? (l = new Uint8Array(f - d), l.set(t.subarray(e + d, t.length), 0)) : l = t.subarray(e + d, e + f);
          const p = {
              unit: l,
              pts: n
          };
          return g || a.samples.push(p), {
              sample: p,
              length: f,
              missing: g
          }
      }
      const c = t.length - e;
      return l = new Uint8Array(c), l.set(t.subarray(e, t.length), 0), {
          sample: {
              unit: l,
              pts: n
          },
          length: c,
          missing: -1
      }
  }
  class zn extends ki {
      constructor(t, e) {
          super(), this.observer = void 0, this.config = void 0, this.observer = t, this.config = e
      }
      resetInitSegment(t, e, s, i) {
          super.resetInitSegment(t, e, s, i), this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              segmentCodec: "aac",
              samples: [],
              manifestCodec: e,
              duration: i,
              inputTimeScale: 9e4,
              dropped: 0
          }
      }
      static probe(t) {
          if (!t) return !1;
          let s = (re(t, 0) || []).length;
          for (let i = t.length; s < i; s++)
              if (jn(t, s)) return x.log("ADTS sync word found !"), !0;
          return !1
      }
      canParse(t, e) {
          return qn(t, e)
      }
      appendFrame(t, e, s) {
          Pi(t, this.observer, e, s, t.manifestCodec);
          const i = Oi(t, e, s, this.basePTS, this.frameIndex);
          if (i && i.missing === 0) return i
      }
  }
  const Qn = /\/emsg[-/]ID3/i;
  class Jn {
      constructor(t, e) {
          this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e
      }
      resetTimeStamp() {}
      resetInitSegment(t, e, s, i) {
          const r = this.videoTrack = Et("video", 1),
              n = this.audioTrack = Et("audio", 1),
              o = this.txtTrack = Et("text", 1);
          if (this.id3Track = Et("id3", 1), this.timeOffset = 0, !(t != null && t.byteLength)) return;
          const l = pi(t);
          if (l.video) {
              const {
                  id: c,
                  timescale: h,
                  codec: u
              } = l.video;
              r.id = c, r.timescale = o.timescale = h, r.codec = u
          }
          if (l.audio) {
              const {
                  id: c,
                  timescale: h,
                  codec: u
              } = l.audio;
              n.id = c, n.timescale = h, n.codec = u
          }
          o.id = fi.text, r.sampleDuration = 0, r.duration = n.duration = i
      }
      resetContiguity() {
          this.remainderData = null
      }
      static probe(t) {
          return t = t.length > 16384 ? t.subarray(0, 16384) : t, $(t, ["moof"]).length > 0
      }
      demux(t, e) {
          this.timeOffset = e;
          let s = t;
          const i = this.videoTrack,
              r = this.txtTrack;
          if (this.config.progressive) {
              this.remainderData && (s = wt(this.remainderData, t));
              const o = Br(s);
              this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array
          } else i.samples = s;
          const n = this.extractID3Track(i, e);
          return r.samples = fs(e, i), {
              videoTrack: i,
              audioTrack: this.audioTrack,
              id3Track: n,
              textTrack: this.txtTrack
          }
      }
      flush() {
          const t = this.timeOffset,
              e = this.videoTrack,
              s = this.txtTrack;
          e.samples = this.remainderData || new Uint8Array, this.remainderData = null;
          const i = this.extractID3Track(e, this.timeOffset);
          return s.samples = fs(t, e), {
              videoTrack: e,
              audioTrack: Et(),
              id3Track: i,
              textTrack: Et()
          }
      }
      extractID3Track(t, e) {
          const s = this.id3Track;
          if (t.samples.length) {
              const i = $(t.samples, ["emsg"]);
              i && i.forEach(r => {
                  const n = Kr(r);
                  if (Qn.test(n.schemeIdUri)) {
                      const o = F(n.presentationTime) ? n.presentationTime / n.timeScale : e + n.presentationTimeDelta / n.timeScale;
                      let l = n.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : n.eventDuration / n.timeScale;
                      l <= .001 && (l = Number.POSITIVE_INFINITY);
                      const c = n.payload;
                      s.samples.push({
                          data: c,
                          len: c.byteLength,
                          dts: o,
                          pts: o,
                          type: Tt.emsg,
                          duration: l
                      })
                  }
              })
          }
          return s
      }
      demuxSampleAes(t, e, s) {
          return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
      }
      destroy() {}
  }
  let Qt = null;
  const Zn = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
      ta = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
      ea = [
          [0, 72, 144, 12],
          [0, 0, 0, 0],
          [0, 72, 144, 12],
          [0, 144, 144, 12]
      ],
      sa = [0, 1, 1, 4];
  
  function Mi(a, t, e, s, i) {
      if (e + 24 > t.length) return;
      const r = Ni(t, e);
      if (r && e + r.frameLength <= t.length) {
          const n = r.samplesPerFrame * 9e4 / r.sampleRate,
              o = s + i * n,
              l = {
                  unit: t.subarray(e, e + r.frameLength),
                  pts: o,
                  dts: o
              };
          return a.config = [], a.channelCount = r.channelCount, a.samplerate = r.sampleRate, a.samples.push(l), {
              sample: l,
              length: r.frameLength,
              missing: 0
          }
      }
  }
  
  function Ni(a, t) {
      const e = a[t + 1] >> 3 & 3,
          s = a[t + 1] >> 1 & 3,
          i = a[t + 2] >> 4 & 15,
          r = a[t + 2] >> 2 & 3;
      if (e !== 1 && i !== 0 && i !== 15 && r !== 3) {
          const n = a[t + 2] >> 1 & 1,
              o = a[t + 3] >> 6,
              l = e === 3 ? 3 - s : s === 3 ? 3 : 4,
              c = Zn[l * 14 + i - 1] * 1e3,
              u = ta[(e === 3 ? 0 : e === 2 ? 1 : 2) * 3 + r],
              d = o === 3 ? 1 : 2,
              f = ea[e][s],
              g = sa[s],
              p = f * 8 * g,
              T = Math.floor(f * c / u + n) * g;
          if (Qt === null) {
              const E = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              Qt = E ? parseInt(E[1]) : 0
          }
          return !!Qt && Qt <= 87 && s === 2 && c >= 224e3 && o === 0 && (a[t + 3] = a[t + 3] | 128), {
              sampleRate: u,
              channelCount: d,
              frameLength: T,
              samplesPerFrame: p
          }
      }
  }
  
  function is(a, t) {
      return a[t] === 255 && (a[t + 1] & 224) === 224 && (a[t + 1] & 6) !== 0
  }
  
  function Ui(a, t) {
      return t + 1 < a.length && is(a, t)
  }
  
  function ia(a, t) {
      return is(a, t) && 4 <= a.length - t
  }
  
  function ra(a, t) {
      if (t + 1 < a.length && is(a, t)) {
          const s = Ni(a, t);
          let i = 4;
          s != null && s.frameLength && (i = s.frameLength);
          const r = t + i;
          return r === a.length || Ui(a, r)
      }
      return !1
  }
  class Ns {
      constructor(t) {
          this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
      }
      loadWord() {
          const t = this.data,
              e = this.bytesAvailable,
              s = t.byteLength - e,
              i = new Uint8Array(4),
              r = Math.min(4, e);
          if (r === 0) throw new Error("no bytes available");
          i.set(t.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r
      }
      skipBits(t) {
          let e;
          t = Math.min(t, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
      }
      readBits(t) {
          let e = Math.min(this.bitsAvailable, t);
          const s = this.word >>> 32 - e;
          if (t > 32 && x.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0) this.word <<= e;
          else if (this.bytesAvailable > 0) this.loadWord();
          else throw new Error("no bits available");
          return e = t - e, e > 0 && this.bitsAvailable ? s << e | this.readBits(e) : s
      }
      skipLZ() {
          let t;
          for (t = 0; t < this.bitsAvailable; ++t)
              if (this.word & 2147483648 >>> t) return this.word <<= t, this.bitsAvailable -= t, t;
          return this.loadWord(), t + this.skipLZ()
      }
      skipUEG() {
          this.skipBits(1 + this.skipLZ())
      }
      skipEG() {
          this.skipBits(1 + this.skipLZ())
      }
      readUEG() {
          const t = this.skipLZ();
          return this.readBits(t + 1) - 1
      }
      readEG() {
          const t = this.readUEG();
          return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
      }
      readBoolean() {
          return this.readBits(1) === 1
      }
      readUByte() {
          return this.readBits(8)
      }
      readUShort() {
          return this.readBits(16)
      }
      readUInt() {
          return this.readBits(32)
      }
      skipScalingList(t) {
          let e = 8,
              s = 8,
              i;
          for (let r = 0; r < t; r++) s !== 0 && (i = this.readEG(), s = (e + i + 256) % 256), e = s === 0 ? e : s
      }
      readSPS() {
          let t = 0,
              e = 0,
              s = 0,
              i = 0,
              r, n, o;
          const l = this.readUByte.bind(this),
              c = this.readBits.bind(this),
              h = this.readUEG.bind(this),
              u = this.readBoolean.bind(this),
              d = this.skipBits.bind(this),
              f = this.skipEG.bind(this),
              g = this.skipUEG.bind(this),
              p = this.skipScalingList.bind(this);
          l();
          const T = l();
          if (c(5), d(3), l(), g(), T === 100 || T === 110 || T === 122 || T === 244 || T === 44 || T === 83 || T === 86 || T === 118 || T === 128) {
              const _ = h();
              if (_ === 3 && d(1), g(), g(), d(1), u())
                  for (n = _ !== 3 ? 8 : 12, o = 0; o < n; o++) u() && (o < 6 ? p(16) : p(64))
          }
          g();
          const y = h();
          if (y === 0) h();
          else if (y === 1)
              for (d(1), f(), f(), r = h(), o = 0; o < r; o++) f();
          g(), d(1);
          const S = h(),
              E = h(),
              R = c(1);
          R === 0 && d(1), d(1), u() && (t = h(), e = h(), s = h(), i = h());
          let A = [1, 1];
          if (u() && u()) switch (l()) {
              case 1:
                  A = [1, 1];
                  break;
              case 2:
                  A = [12, 11];
                  break;
              case 3:
                  A = [10, 11];
                  break;
              case 4:
                  A = [16, 11];
                  break;
              case 5:
                  A = [40, 33];
                  break;
              case 6:
                  A = [24, 11];
                  break;
              case 7:
                  A = [20, 11];
                  break;
              case 8:
                  A = [32, 11];
                  break;
              case 9:
                  A = [80, 33];
                  break;
              case 10:
                  A = [18, 11];
                  break;
              case 11:
                  A = [15, 11];
                  break;
              case 12:
                  A = [64, 33];
                  break;
              case 13:
                  A = [160, 99];
                  break;
              case 14:
                  A = [4, 3];
                  break;
              case 15:
                  A = [3, 2];
                  break;
              case 16:
                  A = [2, 1];
                  break;
              case 255: {
                  A = [l() << 8 | l(), l() << 8 | l()];
                  break
              }
          }
          return {
              width: Math.ceil((S + 1) * 16 - t * 2 - e * 2),
              height: (2 - R) * (E + 1) * 16 - (R ? 2 : 4) * (s + i),
              pixelRatio: A
          }
      }
      readSliceType() {
          return this.readUByte(), this.readUEG(), this.readUEG()
      }
  }
  class na {
      constructor(t, e, s) {
          this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new ts(e, {
              removePKCS7Padding: !1
          })
      }
      decryptBuffer(t) {
          return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer)
      }
      decryptAacSample(t, e, s) {
          const i = t[e].unit;
          if (i.length <= 16) return;
          const r = i.subarray(16, i.length - i.length % 16),
              n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
          this.decryptBuffer(n).then(o => {
              const l = new Uint8Array(o);
              i.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(t, e + 1, s)
          })
      }
      decryptAacSamples(t, e, s) {
          for (;; e++) {
              if (e >= t.length) {
                  s();
                  return
              }
              if (!(t[e].unit.length < 32) && (this.decryptAacSample(t, e, s), !this.decrypter.isSync())) return
          }
      }
      getAvcEncryptedData(t) {
          const e = Math.floor((t.length - 48) / 160) * 16 + 16,
              s = new Int8Array(e);
          let i = 0;
          for (let r = 32; r < t.length - 16; r += 160, i += 16) s.set(t.subarray(r, r + 16), i);
          return s
      }
      getAvcDecryptedUnit(t, e) {
          const s = new Uint8Array(e);
          let i = 0;
          for (let r = 32; r < t.length - 16; r += 160, i += 16) t.set(s.subarray(i, i + 16), r);
          return t
      }
      decryptAvcSample(t, e, s, i, r) {
          const n = xi(r.data),
              o = this.getAvcEncryptedData(n);
          this.decryptBuffer(o.buffer).then(l => {
              r.data = this.getAvcDecryptedUnit(n, l), this.decrypter.isSync() || this.decryptAvcSamples(t, e, s + 1, i)
          })
      }
      decryptAvcSamples(t, e, s, i) {
          if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
          for (;; e++, s = 0) {
              if (e >= t.length) {
                  i();
                  return
              }
              const r = t[e].units;
              for (; !(s >= r.length); s++) {
                  const n = r[s];
                  if (!(n.data.length <= 48 || n.type !== 1 && n.type !== 5) && (this.decryptAvcSample(t, e, s, i, n), !this.decrypter.isSync())) return
              }
          }
      }
  }
  const it = 188;
  class It {
      constructor(t, e, s) {
          this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = s
      }
      static probe(t) {
          const e = It.syncOffset(t);
          return e > 0 && x.warn(`MPEG2-TS detected but first sync word found @ offset ${e}`), e !== -1
      }
      static syncOffset(t) {
          const e = t.length;
          let s = Math.min(it * 5, t.length - it) + 1,
              i = 0;
          for (; i < s;) {
              let r = !1,
                  n = -1,
                  o = 0;
              for (let l = i; l < e; l += it)
                  if (t[l] === 71) {
                      if (o++, n === -1 && (n = l, n !== 0 && (s = Math.min(n + it * 99, t.length - it) + 1)), r || (r = Ve(t, l) === 0), r && o > 1 && (n === 0 && o > 2 || l + it > s)) return n
                  } else {
                      if (o) return -1;
                      break
                  } i++
          }
          return -1
      }
      static createTrack(t, e) {
          return {
              container: t === "video" || t === "audio" ? "video/mp2t" : void 0,
              type: t,
              id: fi[t],
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0,
              duration: t === "audio" ? e : void 0
          }
      }
      resetInitSegment(t, e, s, i) {
          this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = It.createTrack("video"), this._audioTrack = It.createTrack("audio", i), this._id3Track = It.createTrack("id3"), this._txtTrack = It.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = e, this.videoCodec = s, this._duration = i
      }
      resetTimeStamp() {}
      resetContiguity() {
          const {
              _audioTrack: t,
              _avcTrack: e,
              _id3Track: s
          } = this;
          t && (t.pesData = null), e && (e.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null
      }
      demux(t, e, s = !1, i = !1) {
          s || (this.sampleAes = null);
          let r;
          const n = this._avcTrack,
              o = this._audioTrack,
              l = this._id3Track,
              c = this._txtTrack;
          let h = n.pid,
              u = n.pesData,
              d = o.pid,
              f = l.pid,
              g = o.pesData,
              p = l.pesData,
              T = null,
              y = this.pmtParsed,
              S = this._pmtId,
              E = t.length;
          if (this.remainderData && (t = wt(this.remainderData, t), E = t.length, this.remainderData = null), E < it && !i) return this.remainderData = t, {
              audioTrack: o,
              videoTrack: n,
              id3Track: l,
              textTrack: c
          };
          const R = Math.max(0, It.syncOffset(t));
          E -= (E - R) % it, E < t.byteLength && !i && (this.remainderData = new Uint8Array(t.buffer, E, t.buffer.byteLength - E));
          let A = 0;
          for (let D = R; D < E; D += it)
              if (t[D] === 71) {
                  const C = !!(t[D + 1] & 64),
                      k = Ve(t, D),
                      I = (t[D + 3] & 48) >> 4;
                  let O;
                  if (I > 1) {
                      if (O = D + 5 + t[D + 4], O === D + it) continue
                  } else O = D + 4;
                  switch (k) {
                      case h:
                          C && (u && (r = Ft(u)) && this.parseAVCPES(n, c, r, !1), u = {
                              data: [],
                              size: 0
                          }), u && (u.data.push(t.subarray(O, D + it)), u.size += D + it - O);
                          break;
                      case d:
                          if (C) {
                              if (g && (r = Ft(g))) switch (o.segmentCodec) {
                                  case "aac":
                                      this.parseAACPES(o, r);
                                      break;
                                  case "mp3":
                                      this.parseMPEGPES(o, r);
                                      break
                              }
                              g = {
                                  data: [],
                                  size: 0
                              }
                          }
                          g && (g.data.push(t.subarray(O, D + it)), g.size += D + it - O);
                          break;
                      case f:
                          C && (p && (r = Ft(p)) && this.parseID3PES(l, r), p = {
                              data: [],
                              size: 0
                          }), p && (p.data.push(t.subarray(O, D + it)), p.size += D + it - O);
                          break;
                      case 0:
                          C && (O += t[O] + 1), S = this._pmtId = aa(t, O);
                          break;
                      case S: {
                          C && (O += t[O] + 1);
                          const w = oa(t, O, this.typeSupported, s);
                          h = w.avc, h > 0 && (n.pid = h), d = w.audio, d > 0 && (o.pid = d, o.segmentCodec = w.segmentCodec), f = w.id3, f > 0 && (l.pid = f), T !== null && !y && (x.warn(`MPEG-TS PMT found at ${D} after unknown PID '${T}'. Backtracking to sync byte @${R} to parse all TS packets.`), T = null, D = R - 188), y = this.pmtParsed = !0;
                          break
                      }
                      case 17:
                      case 8191:
                          break;
                      default:
                          T = k;
                          break
                  }
              } else A++;
          if (A > 0) {
              const D = new Error(`Found ${A} TS packet/s that do not start with 0x47`);
              this.observer.emit(m.ERROR, m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.FRAG_PARSING_ERROR,
                  fatal: !1,
                  error: D,
                  reason: D.message
              })
          }
          n.pesData = u, o.pesData = g, l.pesData = p;
          const _ = {
              audioTrack: o,
              videoTrack: n,
              id3Track: l,
              textTrack: c
          };
          return i && this.extractRemainingSamples(_), _
      }
      flush() {
          const {
              remainderData: t
          } = this;
          this.remainderData = null;
          let e;
          return t ? e = this.demux(t, -1, !1, !0) : e = {
              videoTrack: this._avcTrack,
              audioTrack: this._audioTrack,
              id3Track: this._id3Track,
              textTrack: this._txtTrack
          }, this.extractRemainingSamples(e), this.sampleAes ? this.decrypt(e, this.sampleAes) : e
      }
      extractRemainingSamples(t) {
          const {
              audioTrack: e,
              videoTrack: s,
              id3Track: i,
              textTrack: r
          } = t, n = s.pesData, o = e.pesData, l = i.pesData;
          let c;
          if (n && (c = Ft(n)) ? (this.parseAVCPES(s, r, c, !0), s.pesData = null) : s.pesData = n, o && (c = Ft(o))) {
              switch (e.segmentCodec) {
                  case "aac":
                      this.parseAACPES(e, c);
                      break;
                  case "mp3":
                      this.parseMPEGPES(e, c);
                      break
              }
              e.pesData = null
          } else o != null && o.size && x.log("last AAC PES packet truncated,might overlap between fragments"), e.pesData = o;
          l && (c = Ft(l)) ? (this.parseID3PES(i, c), i.pesData = null) : i.pesData = l
      }
      demuxSampleAes(t, e, s) {
          const i = this.demux(t, s, !0, !this.config.progressive),
              r = this.sampleAes = new na(this.observer, this.config, e);
          return this.decrypt(i, r)
      }
      decrypt(t, e) {
          return new Promise(s => {
              const {
                  audioTrack: i,
                  videoTrack: r
              } = t;
              i.samples && i.segmentCodec === "aac" ? e.decryptAacSamples(i.samples, 0, () => {
                  r.samples ? e.decryptAvcSamples(r.samples, 0, 0, () => {
                      s(t)
                  }) : s(t)
              }) : r.samples && e.decryptAvcSamples(r.samples, 0, 0, () => {
                  s(t)
              })
          })
      }
      destroy() {
          this._duration = 0
      }
      parseAVCPES(t, e, s, i) {
          const r = this.parseAVCNALu(t, s.data);
          let n = this.avcSample,
              o, l = !1;
          s.data = null, n && r.length && !t.audFound && ($t(n, t), n = this.avcSample = Jt(!1, s.pts, s.dts, "")), r.forEach(c => {
              var h;
              switch (c.type) {
                  case 1: {
                      let d = !1;
                      o = !0;
                      const f = c.data;
                      if (l && f.length > 4) {
                          const g = new Ns(f).readSliceType();
                          (g === 2 || g === 4 || g === 7 || g === 9) && (d = !0)
                      }
                      if (d) {
                          var u;
                          (u = n) != null && u.frame && !n.key && ($t(n, t), n = this.avcSample = null)
                      }
                      n || (n = this.avcSample = Jt(!0, s.pts, s.dts, "")), n.frame = !0, n.key = d;
                      break
                  }
                  case 5:
                      o = !0, (h = n) != null && h.frame && !n.key && ($t(n, t), n = this.avcSample = null), n || (n = this.avcSample = Jt(!0, s.pts, s.dts, "")), n.key = !0, n.frame = !0;
                      break;
                  case 6: {
                      o = !0, yi(c.data, 1, s.pts, e.samples);
                      break
                  }
                  case 7:
                      if (o = !0, l = !0, !t.sps) {
                          const d = c.data,
                              g = new Ns(d).readSPS();
                          t.width = g.width, t.height = g.height, t.pixelRatio = g.pixelRatio, t.sps = [d], t.duration = this._duration;
                          const p = d.subarray(1, 4);
                          let T = "avc1.";
                          for (let y = 0; y < 3; y++) {
                              let S = p[y].toString(16);
                              S.length < 2 && (S = "0" + S), T += S
                          }
                          t.codec = T
                      }
                      break;
                  case 8:
                      o = !0, t.pps || (t.pps = [c.data]);
                      break;
                  case 9:
                      o = !1, t.audFound = !0, n && $t(n, t), n = this.avcSample = Jt(!1, s.pts, s.dts, "");
                      break;
                  case 12:
                      o = !0;
                      break;
                  default:
                      o = !1, n && (n.debug += "unknown NAL " + c.type + " ");
                      break
              }
              n && o && n.units.push(c)
          }), i && n && ($t(n, t), this.avcSample = null)
      }
      getLastNalUnit(t) {
          var e;
          let s = this.avcSample,
              i;
          if ((!s || s.units.length === 0) && (s = t[t.length - 1]), (e = s) != null && e.units) {
              const r = s.units;
              i = r[r.length - 1]
          }
          return i
      }
      parseAVCNALu(t, e) {
          const s = e.byteLength;
          let i = t.naluState || 0;
          const r = i,
              n = [];
          let o = 0,
              l, c, h, u = -1,
              d = 0;
          for (i === -1 && (u = 0, d = e[0] & 31, i = 0, o = 1); o < s;) {
              if (l = e[o++], !i) {
                  i = l ? 0 : 1;
                  continue
              }
              if (i === 1) {
                  i = l ? 0 : 2;
                  continue
              }
              if (!l) i = 3;
              else if (l === 1) {
                  if (u >= 0) {
                      const f = {
                          data: e.subarray(u, o - i - 1),
                          type: d
                      };
                      n.push(f)
                  } else {
                      const f = this.getLastNalUnit(t.samples);
                      if (f && (r && o <= 4 - r && f.state && (f.data = f.data.subarray(0, f.data.byteLength - r)), c = o - i - 1, c > 0)) {
                          const g = new Uint8Array(f.data.byteLength + c);
                          g.set(f.data, 0), g.set(e.subarray(0, c), f.data.byteLength), f.data = g, f.state = 0
                      }
                  }
                  o < s ? (h = e[o] & 31, u = o, d = h, i = 0) : i = -1
              } else i = 0
          }
          if (u >= 0 && i >= 0) {
              const f = {
                  data: e.subarray(u, s),
                  type: d,
                  state: i
              };
              n.push(f)
          }
          if (n.length === 0) {
              const f = this.getLastNalUnit(t.samples);
              if (f) {
                  const g = new Uint8Array(f.data.byteLength + e.byteLength);
                  g.set(f.data, 0), g.set(e, f.data.byteLength), f.data = g
              }
          }
          return t.naluState = i, n
      }
      parseAACPES(t, e) {
          let s = 0;
          const i = this.aacOverFlow;
          let r = e.data;
          if (i) {
              this.aacOverFlow = null;
              const u = i.missing,
                  d = i.sample.unit.byteLength;
              if (u === -1) {
                  const f = new Uint8Array(d + r.byteLength);
                  f.set(i.sample.unit, 0), f.set(r, d), r = f
              } else {
                  const f = d - u;
                  i.sample.unit.set(r.subarray(0, u), f), t.samples.push(i.sample), s = i.missing
              }
          }
          let n, o;
          for (n = s, o = r.length; n < o - 1 && !ce(r, n); n++);
          if (n !== s) {
              let u;
              const d = n < o - 1;
              d ? u = `AAC PES did not start with ADTS header,offset:${n}` : u = "No ADTS header found in AAC PES";
              const f = new Error(u);
              if (x.warn(`parsing error: ${u}`), this.observer.emit(m.ERROR, m.ERROR, {
                      type: N.MEDIA_ERROR,
                      details: L.FRAG_PARSING_ERROR,
                      fatal: !1,
                      levelRetry: d,
                      error: f,
                      reason: u
                  }), !d) return
          }
          Pi(t, this.observer, r, n, this.audioCodec);
          let l;
          if (e.pts !== void 0) l = e.pts;
          else if (i) {
              const u = Fi(t.samplerate);
              l = i.sample.pts + u
          } else {
              x.warn("[tsdemuxer]: AAC PES unknown PTS");
              return
          }
          let c = 0,
              h;
          for (; n < o;)
              if (h = Oi(t, r, n, l, c), n += h.length, h.missing) {
                  this.aacOverFlow = h;
                  break
              } else
                  for (c++; n < o - 1 && !ce(r, n); n++);
      }
      parseMPEGPES(t, e) {
          const s = e.data,
              i = s.length;
          let r = 0,
              n = 0;
          const o = e.pts;
          if (o === void 0) {
              x.warn("[tsdemuxer]: MPEG PES unknown PTS");
              return
          }
          for (; n < i;)
              if (Ui(s, n)) {
                  const l = Mi(t, s, n, o, r);
                  if (l) n += l.length, r++;
                  else break
              } else n++
      }
      parseID3PES(t, e) {
          if (e.pts === void 0) {
              x.warn("[tsdemuxer]: ID3 PES unknown PTS");
              return
          }
          const s = tt({}, e, {
              type: this._avcTrack ? Tt.emsg : Tt.audioId3,
              duration: Number.POSITIVE_INFINITY
          });
          t.samples.push(s)
      }
  }
  
  function Jt(a, t, e, s) {
      return {
          key: a,
          frame: !1,
          pts: t,
          dts: e,
          units: [],
          debug: s,
          length: 0
      }
  }
  
  function Ve(a, t) {
      return ((a[t + 1] & 31) << 8) + a[t + 2]
  }
  
  function aa(a, t) {
      return (a[t + 10] & 31) << 8 | a[t + 11]
  }
  
  function oa(a, t, e, s) {
      const i = {
              audio: -1,
              avc: -1,
              id3: -1,
              segmentCodec: "aac"
          },
          r = (a[t + 1] & 15) << 8 | a[t + 2],
          n = t + 3 + r - 4,
          o = (a[t + 10] & 15) << 8 | a[t + 11];
      for (t += 12 + o; t < n;) {
          const l = Ve(a, t);
          switch (a[t]) {
              case 207:
                  if (!s) {
                      x.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                      break
                  }
              case 15:
                  i.audio === -1 && (i.audio = l);
                  break;
              case 21:
                  i.id3 === -1 && (i.id3 = l);
                  break;
              case 219:
                  if (!s) {
                      x.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                      break
                  }
              case 27:
                  i.avc === -1 && (i.avc = l);
                  break;
              case 3:
              case 4:
                  e.mpeg !== !0 && e.mp3 !== !0 ? x.log("MPEG audio found, not supported in this browser") : i.audio === -1 && (i.audio = l, i.segmentCodec = "mp3");
                  break;
              case 36:
                  x.warn("Unsupported HEVC stream type found");
                  break
          }
          t += ((a[t + 3] & 15) << 8 | a[t + 4]) + 5
      }
      return i
  }
  
  function Ft(a) {
      let t = 0,
          e, s, i, r, n;
      const o = a.data;
      if (!a || a.size === 0) return null;
      for (; o[0].length < 19 && o.length > 1;) {
          const c = new Uint8Array(o[0].length + o[1].length);
          c.set(o[0]), c.set(o[1], o[0].length), o[0] = c, o.splice(1, 1)
      }
      if (e = o[0], (e[0] << 16) + (e[1] << 8) + e[2] === 1) {
          if (s = (e[4] << 8) + e[5], s && s > a.size - 6) return null;
          const c = e[7];
          c & 192 && (r = (e[9] & 14) * 536870912 + (e[10] & 255) * 4194304 + (e[11] & 254) * 16384 + (e[12] & 255) * 128 + (e[13] & 254) / 2, c & 64 ? (n = (e[14] & 14) * 536870912 + (e[15] & 255) * 4194304 + (e[16] & 254) * 16384 + (e[17] & 255) * 128 + (e[18] & 254) / 2, r - n > 60 * 9e4 && (x.warn(`${Math.round((r-n)/9e4)}s delta between PTS and DTS, align them`), r = n)) : n = r), i = e[8];
          let h = i + 9;
          if (a.size <= h) return null;
          a.size -= h;
          const u = new Uint8Array(a.size);
          for (let d = 0, f = o.length; d < f; d++) {
              e = o[d];
              let g = e.byteLength;
              if (h)
                  if (h > g) {
                      h -= g;
                      continue
                  } else e = e.subarray(h), g -= h, h = 0;
              u.set(e, t), t += g
          }
          return s && (s -= i + 3), {
              data: u,
              pts: r,
              dts: n,
              len: s
          }
      }
      return null
  }
  
  function $t(a, t) {
      if (a.units.length && a.frame) {
          if (a.pts === void 0) {
              const e = t.samples,
                  s = e.length;
              if (s) {
                  const i = e[s - 1];
                  a.pts = i.pts, a.dts = i.dts
              } else {
                  t.dropped++;
                  return
              }
          }
          t.samples.push(a)
      }
      a.debug.length && x.log(a.pts + "/" + a.dts + ":" + a.debug)
  }
  class la extends ki {
      resetInitSegment(t, e, s, i) {
          super.resetInitSegment(t, e, s, i), this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: 2,
              pid: -1,
              sequenceNumber: 0,
              segmentCodec: "mp3",
              samples: [],
              manifestCodec: e,
              duration: i,
              inputTimeScale: 9e4,
              dropped: 0
          }
      }
      static probe(t) {
          if (!t) return !1;
          let s = (re(t, 0) || []).length;
          for (let i = t.length; s < i; s++)
              if (ra(t, s)) return x.log("MPEG Audio sync word found !"), !0;
          return !1
      }
      canParse(t, e) {
          return ia(t, e)
      }
      appendFrame(t, e, s) {
          if (this.basePTS !== null) return Mi(t, e, s, this.basePTS, this.frameIndex)
      }
  }
  class Us {
      static getSilentFrame(t, e) {
          switch (t) {
              case "mp4a.40.2":
                  if (e === 1) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                  if (e === 2) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                  if (e === 3) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                  if (e === 4) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                  if (e === 5) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                  if (e === 6) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                  break;
              default:
                  if (e === 1) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                  if (e === 2) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                  if (e === 3) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                  break
          }
      }
  }
  const Rt = Math.pow(2, 32) - 1;
  class v {
      static init() {
          v.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
          };
          let t;
          for (t in v.types) v.types.hasOwnProperty(t) && (v.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
          const e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
              s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
          v.HDLR_TYPES = {
              video: e,
              audio: s
          };
          const i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
              r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
          v.STTS = v.STSC = v.STCO = r, v.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), v.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), v.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), v.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
          const n = new Uint8Array([105, 115, 111, 109]),
              o = new Uint8Array([97, 118, 99, 49]),
              l = new Uint8Array([0, 0, 0, 1]);
          v.FTYP = v.box(v.types.ftyp, n, l, n, o), v.DINF = v.box(v.types.dinf, v.box(v.types.dref, i))
      }
      static box(t, ...e) {
          let s = 8,
              i = e.length;
          const r = i;
          for (; i--;) s += e[i].byteLength;
          const n = new Uint8Array(s);
          for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = s & 255, n.set(t, 4), i = 0, s = 8; i < r; i++) n.set(e[i], s), s += e[i].byteLength;
          return n
      }
      static hdlr(t) {
          return v.box(v.types.hdlr, v.HDLR_TYPES[t])
      }
      static mdat(t) {
          return v.box(v.types.mdat, t)
      }
      static mdhd(t, e) {
          e *= t;
          const s = Math.floor(e / (Rt + 1)),
              i = Math.floor(e % (Rt + 1));
          return v.box(v.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, s >> 24, s >> 16 & 255, s >> 8 & 255, s & 255, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, 85, 196, 0, 0]))
      }
      static mdia(t) {
          return v.box(v.types.mdia, v.mdhd(t.timescale, t.duration), v.hdlr(t.type), v.minf(t))
      }
      static mfhd(t) {
          return v.box(v.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255]))
      }
      static minf(t) {
          return t.type === "audio" ? v.box(v.types.minf, v.box(v.types.smhd, v.SMHD), v.DINF, v.stbl(t)) : v.box(v.types.minf, v.box(v.types.vmhd, v.VMHD), v.DINF, v.stbl(t))
      }
      static moof(t, e, s) {
          return v.box(v.types.moof, v.mfhd(t), v.traf(s, e))
      }
      static moov(t) {
          let e = t.length;
          const s = [];
          for (; e--;) s[e] = v.trak(t[e]);
          return v.box.apply(null, [v.types.moov, v.mvhd(t[0].timescale, t[0].duration)].concat(s).concat(v.mvex(t)))
      }
      static mvex(t) {
          let e = t.length;
          const s = [];
          for (; e--;) s[e] = v.trex(t[e]);
          return v.box.apply(null, [v.types.mvex, ...s])
      }
      static mvhd(t, e) {
          e *= t;
          const s = Math.floor(e / (Rt + 1)),
              i = Math.floor(e % (Rt + 1)),
              r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, s >> 24, s >> 16 & 255, s >> 8 & 255, s & 255, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
          return v.box(v.types.mvhd, r)
      }
      static sdtp(t) {
          const e = t.samples || [],
              s = new Uint8Array(4 + e.length);
          let i, r;
          for (i = 0; i < e.length; i++) r = e[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
          return v.box(v.types.sdtp, s)
      }
      static stbl(t) {
          return v.box(v.types.stbl, v.stsd(t), v.box(v.types.stts, v.STTS), v.box(v.types.stsc, v.STSC), v.box(v.types.stsz, v.STSZ), v.box(v.types.stco, v.STCO))
      }
      static avc1(t) {
          let e = [],
              s = [],
              i, r, n;
          for (i = 0; i < t.sps.length; i++) r = t.sps[i], n = r.byteLength, e.push(n >>> 8 & 255), e.push(n & 255), e = e.concat(Array.prototype.slice.call(r));
          for (i = 0; i < t.pps.length; i++) r = t.pps[i], n = r.byteLength, s.push(n >>> 8 & 255), s.push(n & 255), s = s.concat(Array.prototype.slice.call(r));
          const o = v.box(v.types.avcC, new Uint8Array([1, e[3], e[4], e[5], 255, 224 | t.sps.length].concat(e).concat([t.pps.length]).concat(s))),
              l = t.width,
              c = t.height,
              h = t.pixelRatio[0],
              u = t.pixelRatio[1];
          return v.box(v.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, l & 255, c >> 8 & 255, c & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, v.box(v.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), v.box(v.types.pasp, new Uint8Array([h >> 24, h >> 16 & 255, h >> 8 & 255, h & 255, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255])))
      }
      static esds(t) {
          const e = t.config.length;
          return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
      }
      static mp4a(t) {
          const e = t.samplerate;
          return v.box(v.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, e & 255, 0, 0]), v.box(v.types.esds, v.esds(t)))
      }
      static mp3(t) {
          const e = t.samplerate;
          return v.box(v.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, e & 255, 0, 0]))
      }
      static stsd(t) {
          return t.type === "audio" ? t.segmentCodec === "mp3" && t.codec === "mp3" ? v.box(v.types.stsd, v.STSD, v.mp3(t)) : v.box(v.types.stsd, v.STSD, v.mp4a(t)) : v.box(v.types.stsd, v.STSD, v.avc1(t))
      }
      static tkhd(t) {
          const e = t.id,
              s = t.duration * t.timescale,
              i = t.width,
              r = t.height,
              n = Math.floor(s / (Rt + 1)),
              o = Math.floor(s % (Rt + 1));
          return v.box(v.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255, o >> 24, o >> 16 & 255, o >> 8 & 255, o & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, i & 255, 0, 0, r >> 8 & 255, r & 255, 0, 0]))
      }
      static traf(t, e) {
          const s = v.sdtp(t),
              i = t.id,
              r = Math.floor(e / (Rt + 1)),
              n = Math.floor(e % (Rt + 1));
          return v.box(v.types.traf, v.box(v.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255])), v.box(v.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255, n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255])), v.trun(t, s.length + 16 + 20 + 8 + 16 + 8 + 8), s)
      }
      static trak(t) {
          return t.duration = t.duration || 4294967295, v.box(v.types.trak, v.tkhd(t), v.mdia(t))
      }
      static trex(t) {
          const e = t.id;
          return v.box(v.types.trex, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, e & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
      }
      static trun(t, e) {
          const s = t.samples || [],
              i = s.length,
              r = 12 + 16 * i,
              n = new Uint8Array(r);
          let o, l, c, h, u, d;
          for (e += 8 + r, n.set([t.type === "video" ? 1 : 0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i & 255, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, e & 255], 0), o = 0; o < i; o++) l = s[o], c = l.duration, h = l.size, u = l.flags, d = l.cts, n.set([c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h & 255, u.isLeading << 2 | u.dependsOn, u.isDependedOn << 6 | u.hasRedundancy << 4 | u.paddingValue << 1 | u.isNonSync, u.degradPrio & 61440, u.degradPrio & 15, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, d & 255], 12 + 16 * o);
          return v.box(v.types.trun, n)
      }
      static initSegment(t) {
          v.types || v.init();
          const e = v.moov(t),
              s = new Uint8Array(v.FTYP.byteLength + e.byteLength);
          return s.set(v.FTYP), s.set(e, v.FTYP.byteLength), s
      }
  }
  v.types = void 0;
  v.HDLR_TYPES = void 0;
  v.STTS = void 0;
  v.STSC = void 0;
  v.STCO = void 0;
  v.STSZ = void 0;
  v.VMHD = void 0;
  v.SMHD = void 0;
  v.STSD = void 0;
  v.FTYP = void 0;
  v.DINF = void 0;
  const Bi = 9e4;
  
  function rs(a, t, e = 1, s = !1) {
      const i = a * t * e;
      return s ? Math.round(i) : i
  }
  
  function ca(a, t, e = 1, s = !1) {
      return rs(a, t, 1 / e, s)
  }
  
  function Gt(a, t = !1) {
      return rs(a, 1e3, 1 / Bi, t)
  }
  
  function ha(a, t = 1) {
      return rs(a, Bi, 1 / t)
  }
  const ua = 10 * 1e3,
      Bs = 1024,
      da = 1152;
  let Zt = null,
      Ae = null;
  class Le {
      constructor(t, e, s, i = "") {
          if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = s, this.ISGenerated = !1, Zt === null) {
              const n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
              Zt = n ? parseInt(n[1]) : 0
          }
          if (Ae === null) {
              const r = navigator.userAgent.match(/Safari\/(\d+)/i);
              Ae = r ? parseInt(r[1]) : 0
          }
      }
      destroy() {}
      resetTimeStamp(t) {
          x.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
      }
      resetNextTimestamp() {
          x.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
      }
      resetInitSegment() {
          x.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
      }
      getVideoStartPts(t) {
          let e = !1;
          const s = t.reduce((i, r) => {
              const n = r.pts - i;
              return n < -4294967296 ? (e = !0, gt(i, r.pts)) : n > 0 ? i : r.pts
          }, t[0].pts);
          return e && x.debug("PTS rollover detected"), s
      }
      remux(t, e, s, i, r, n, o, l) {
          let c, h, u, d, f, g, p = r,
              T = r;
          const y = t.pid > -1,
              S = e.pid > -1,
              E = e.samples.length,
              R = t.samples.length > 0,
              A = o && E > 0 || E > 1;
          if ((!y || R) && (!S || A) || this.ISGenerated || o) {
              this.ISGenerated || (u = this.generateIS(t, e, r, n));
              const D = this.isVideoContiguous;
              let C = -1,
                  k;
              if (A && (C = fa(e.samples), !D && this.config.forceKeyFrameOnDiscontinuity))
                  if (g = !0, C > 0) {
                      x.warn(`[mp4-remuxer]: Dropped ${C} out of ${E} video samples due to a missing keyframe`);
                      const I = this.getVideoStartPts(e.samples);
                      e.samples = e.samples.slice(C), e.dropped += C, T += (e.samples[0].pts - I) / e.inputTimeScale, k = T
                  } else C === -1 && (x.warn(`[mp4-remuxer]: No keyframe found out of ${E} video samples`), g = !1);
              if (this.ISGenerated) {
                  if (R && A) {
                      const I = this.getVideoStartPts(e.samples),
                          w = (gt(t.samples[0].pts, I) - I) / e.inputTimeScale;
                      p += Math.max(0, w), T += Math.max(0, -w)
                  }
                  if (R) {
                      if (t.samplerate || (x.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), u = this.generateIS(t, e, r, n)), h = this.remuxAudio(t, p, this.isAudioContiguous, n, S || A || l === U.AUDIO ? T : void 0), A) {
                          const I = h ? h.endPTS - h.startPTS : 0;
                          e.inputTimeScale || (x.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(t, e, r, n)), c = this.remuxVideo(e, T, D, I)
                      }
                  } else A && (c = this.remuxVideo(e, T, D, 0));
                  c && (c.firstKeyFrame = C, c.independent = C !== -1, c.firstKeyFramePTS = k)
              }
          }
          return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = $i(s, r, this._initPTS, this._initDTS)), i.samples.length && (d = Gi(i, r, this._initPTS))), {
              audio: h,
              video: c,
              initSegment: u,
              independent: g,
              text: d,
              id3: f
          }
      }
      generateIS(t, e, s, i) {
          const r = t.samples,
              n = e.samples,
              o = this.typeSupported,
              l = {},
              c = this._initPTS;
          let h = !c || i,
              u = "audio/mp4",
              d, f, g;
          if (h && (d = f = 1 / 0), t.config && r.length) {
              switch (t.timescale = t.samplerate, t.segmentCodec) {
                  case "mp3":
                      o.mpeg ? (u = "audio/mpeg", t.codec = "") : o.mp3 && (t.codec = "mp3");
                      break
              }
              l.audio = {
                  id: "audio",
                  container: u,
                  codec: t.codec,
                  initSegment: t.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : v.initSegment([t]),
                  metadata: {
                      channelCount: t.channelCount
                  }
              }, h && (g = t.inputTimeScale, !c || g !== c.timescale ? d = f = r[0].pts - Math.round(g * s) : h = !1)
          }
          if (e.sps && e.pps && n.length && (e.timescale = e.inputTimeScale, l.video = {
                  id: "main",
                  container: "video/mp4",
                  codec: e.codec,
                  initSegment: v.initSegment([e]),
                  metadata: {
                      width: e.width,
                      height: e.height
                  }
              }, h))
              if (g = e.inputTimeScale, !c || g !== c.timescale) {
                  const p = this.getVideoStartPts(n),
                      T = Math.round(g * s);
                  f = Math.min(f, gt(n[0].dts, p) - T), d = Math.min(d, p - T)
              } else h = !1;
          if (Object.keys(l).length) return this.ISGenerated = !0, h ? (this._initPTS = {
              baseTime: d,
              timescale: g
          }, this._initDTS = {
              baseTime: f,
              timescale: g
          }) : d = g = void 0, {
              tracks: l,
              initPTS: d,
              timescale: g
          }
      }
      remuxVideo(t, e, s, i) {
          const r = t.inputTimeScale,
              n = t.samples,
              o = [],
              l = n.length,
              c = this._initPTS;
          let h = this.nextAvcDts,
              u = 8,
              d = this.videoSampleDuration,
              f, g, p = Number.POSITIVE_INFINITY,
              T = Number.NEGATIVE_INFINITY,
              y = !1;
          if (!s || h === null) {
              const P = e * r,
                  M = n[0].pts - gt(n[0].dts, n[0].pts);
              h = P - M
          }
          const S = c.baseTime * r / c.timescale;
          for (let P = 0; P < l; P++) {
              const M = n[P];
              M.pts = gt(M.pts - S, h), M.dts = gt(M.dts - S, h), M.dts < n[P > 0 ? P - 1 : P].dts && (y = !0)
          }
          y && n.sort(function(P, M) {
              const W = P.dts - M.dts,
                  Y = P.pts - M.pts;
              return W || Y
          }), f = n[0].dts, g = n[n.length - 1].dts;
          const E = g - f,
              R = E ? Math.round(E / (l - 1)) : d || t.inputTimeScale / 30;
          if (s) {
              const P = f - h,
                  M = P > R,
                  W = P < -1;
              if ((M || W) && (M ? x.warn(`AVC: ${Gt(P,!0)} ms (${P}dts) hole between fragments detected, filling it`) : x.warn(`AVC: ${Gt(-P,!0)} ms (${P}dts) overlapping between fragments detected`), !W || h >= n[0].pts)) {
                  f = h;
                  const Y = n[0].pts - P;
                  n[0].dts = f, n[0].pts = Y, x.log(`Video: First PTS/DTS adjusted: ${Gt(Y,!0)}/${Gt(f,!0)}, delta: ${Gt(P,!0)} ms`)
              }
          }
          f = Math.max(0, f);
          let A = 0,
              _ = 0;
          for (let P = 0; P < l; P++) {
              const M = n[P],
                  W = M.units,
                  Y = W.length;
              let K = 0;
              for (let Z = 0; Z < Y; Z++) K += W[Z].data.length;
              _ += K, A += Y, M.length = K, M.dts = Math.max(M.dts, f), p = Math.min(M.pts, p), T = Math.max(M.pts, T)
          }
          g = n[l - 1].dts;
          const D = _ + 4 * A + 8;
          let C;
          try {
              C = new Uint8Array(D)
          } catch (P) {
              this.observer.emit(m.ERROR, m.ERROR, {
                  type: N.MUX_ERROR,
                  details: L.REMUX_ALLOC_ERROR,
                  fatal: !1,
                  error: P,
                  bytes: D,
                  reason: `fail allocating video mdat ${D}`
              });
              return
          }
          const k = new DataView(C.buffer);
          k.setUint32(0, D), C.set(v.types.mdat, 4);
          let I = !1,
              O = Number.POSITIVE_INFINITY,
              w = Number.POSITIVE_INFINITY,
              V = Number.NEGATIVE_INFINITY,
              nt = Number.NEGATIVE_INFINITY;
          for (let P = 0; P < l; P++) {
              const M = n[P],
                  W = M.units;
              let Y = 0;
              for (let ht = 0, mt = W.length; ht < mt; ht++) {
                  const ut = W[ht],
                      Dt = ut.data,
                      fe = ut.data.byteLength;
                  k.setUint32(u, fe), u += 4, C.set(Dt, u), u += fe, Y += 4 + fe
              }
              let K;
              if (P < l - 1) d = n[P + 1].dts - M.dts, K = n[P + 1].pts - M.pts;
              else {
                  const ht = this.config,
                      mt = P > 0 ? M.dts - n[P - 1].dts : R;
                  if (K = P > 0 ? M.pts - n[P - 1].pts : R, ht.stretchShortVideoTrack && this.nextAudioPts !== null) {
                      const ut = Math.floor(ht.maxBufferHole * r),
                          Dt = (i ? p + i * r : this.nextAudioPts) - M.pts;
                      Dt > ut ? (d = Dt - mt, d < 0 ? d = mt : I = !0, x.log(`[mp4-remuxer]: It is approximately ${Dt/90} ms to the next segment; using duration ${d/90} ms for the last video frame.`)) : d = mt
                  } else d = mt
              }
              const Z = Math.round(M.pts - M.dts);
              O = Math.min(O, d), V = Math.max(V, d), w = Math.min(w, K), nt = Math.max(nt, K), o.push(new $s(M.key, d, Y, Z))
          }
          if (o.length) {
              if (Zt) {
                  if (Zt < 70) {
                      const P = o[0].flags;
                      P.dependsOn = 2, P.isNonSync = 0
                  }
              } else if (Ae && nt - w < V - O && R / V < .025 && o[0].cts === 0) {
                  x.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                  let P = f;
                  for (let M = 0, W = o.length; M < W; M++) {
                      const Y = P + o[M].duration,
                          K = P + o[M].cts;
                      if (M < W - 1) {
                          const Z = Y + o[M + 1].cts;
                          o[M].duration = Z - K
                      } else o[M].duration = M ? o[M - 1].duration : R;
                      o[M].cts = 0, P = Y
                  }
              }
          }
          d = I || !d ? R : d, this.nextAvcDts = h = g + d, this.videoSampleDuration = d, this.isVideoContiguous = !0;
          const j = v.moof(t.sequenceNumber++, f, tt({}, t, {
                  samples: o
              })),
              z = "video",
              X = {
                  data1: j,
                  data2: C,
                  startPTS: p / r,
                  endPTS: (T + d) / r,
                  startDTS: f / r,
                  endDTS: h / r,
                  type: z,
                  hasAudio: !1,
                  hasVideo: !0,
                  nb: o.length,
                  dropped: t.dropped
              };
          return t.samples = [], t.dropped = 0, X
      }
      remuxAudio(t, e, s, i, r) {
          const n = t.inputTimeScale,
              o = t.samplerate ? t.samplerate : n,
              l = n / o,
              c = t.segmentCodec === "aac" ? Bs : da,
              h = c * l,
              u = this._initPTS,
              d = t.segmentCodec === "mp3" && this.typeSupported.mpeg,
              f = [],
              g = r !== void 0;
          let p = t.samples,
              T = d ? 0 : 8,
              y = this.nextAudioPts || -1;
          const S = e * n,
              E = u.baseTime * n / u.timescale;
          if (this.isAudioContiguous = s = s || p.length && y > 0 && (i && Math.abs(S - y) < 9e3 || Math.abs(gt(p[0].pts - E, S) - y) < 20 * h), p.forEach(function(z) {
                  z.pts = gt(z.pts - E, S)
              }), !s || y < 0) {
              if (p = p.filter(z => z.pts >= 0), !p.length) return;
              r === 0 ? y = 0 : i && !g ? y = Math.max(0, S) : y = p[0].pts
          }
          if (t.segmentCodec === "aac") {
              const z = this.config.maxAudioFramesDrift;
              for (let X = 0, P = y; X < p.length; X++) {
                  const M = p[X],
                      W = M.pts,
                      Y = W - P,
                      K = Math.abs(1e3 * Y / n);
                  if (Y <= -z * h && g) X === 0 && (x.warn(`Audio frame @ ${(W/n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*Y/n)} ms.`), this.nextAudioPts = y = P = W);
                  else if (Y >= z * h && K < ua && g) {
                      let Z = Math.round(Y / h);
                      P = W - Z * h, P < 0 && (Z--, P += h), X === 0 && (this.nextAudioPts = y = P), x.warn(`[mp4-remuxer]: Injecting ${Z} audio frame @ ${(P/n).toFixed(3)}s due to ${Math.round(1e3*Y/n)} ms gap.`);
                      for (let ht = 0; ht < Z; ht++) {
                          const mt = Math.max(P, 0);
                          let ut = Us.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                          ut || (x.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), ut = M.unit.subarray()), p.splice(X, 0, {
                              unit: ut,
                              pts: mt
                          }), P += h, X++
                      }
                  }
                  M.pts = P, P += h
              }
          }
          let R = null,
              A = null,
              _, D = 0,
              C = p.length;
          for (; C--;) D += p[C].unit.byteLength;
          for (let z = 0, X = p.length; z < X; z++) {
              const P = p[z],
                  M = P.unit;
              let W = P.pts;
              if (A !== null) {
                  const K = f[z - 1];
                  K.duration = Math.round((W - A) / l)
              } else if (s && t.segmentCodec === "aac" && (W = y), R = W, D > 0) {
                  D += T;
                  try {
                      _ = new Uint8Array(D)
                  } catch (K) {
                      this.observer.emit(m.ERROR, m.ERROR, {
                          type: N.MUX_ERROR,
                          details: L.REMUX_ALLOC_ERROR,
                          fatal: !1,
                          error: K,
                          bytes: D,
                          reason: `fail allocating audio mdat ${D}`
                      });
                      return
                  }
                  d || (new DataView(_.buffer).setUint32(0, D), _.set(v.types.mdat, 4))
              } else return;
              _.set(M, T);
              const Y = M.byteLength;
              T += Y, f.push(new $s(!0, c, Y, 0)), A = W
          }
          const k = f.length;
          if (!k) return;
          const I = f[f.length - 1];
          this.nextAudioPts = y = A + l * I.duration;
          const O = d ? new Uint8Array(0) : v.moof(t.sequenceNumber++, R / l, tt({}, t, {
              samples: f
          }));
          t.samples = [];
          const w = R / n,
              V = y / n,
              j = {
                  data1: O,
                  data2: _,
                  startPTS: w,
                  endPTS: V,
                  startDTS: w,
                  endDTS: V,
                  type: "audio",
                  hasAudio: !0,
                  hasVideo: !1,
                  nb: k
              };
          return this.isAudioContiguous = !0, j
      }
      remuxEmptyAudio(t, e, s, i) {
          const r = t.inputTimeScale,
              n = t.samplerate ? t.samplerate : r,
              o = r / n,
              l = this.nextAudioPts,
              c = this._initDTS,
              h = c.baseTime * 9e4 / c.timescale,
              u = (l !== null ? l : i.startDTS * r) + h,
              d = i.endDTS * r + h,
              f = o * Bs,
              g = Math.ceil((d - u) / f),
              p = Us.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
          if (x.warn("[mp4-remuxer]: remux empty Audio"), !p) {
              x.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
              return
          }
          const T = [];
          for (let y = 0; y < g; y++) {
              const S = u + y * f;
              T.push({
                  unit: p,
                  pts: S,
                  dts: S
              })
          }
          return t.samples = T, this.remuxAudio(t, e, s, !1)
      }
  }
  
  function gt(a, t) {
      let e;
      if (t === null) return a;
      for (t < a ? e = -8589934592 : e = 8589934592; Math.abs(a - t) > 4294967296;) a += e;
      return a
  }
  
  function fa(a) {
      for (let t = 0; t < a.length; t++)
          if (a[t].key) return t;
      return -1
  }
  
  function $i(a, t, e, s) {
      const i = a.samples.length;
      if (!i) return;
      const r = a.inputTimeScale;
      for (let o = 0; o < i; o++) {
          const l = a.samples[o];
          l.pts = gt(l.pts - e.baseTime * r / e.timescale, t * r) / r, l.dts = gt(l.dts - s.baseTime * r / s.timescale, t * r) / r
      }
      const n = a.samples;
      return a.samples = [], {
          samples: n
      }
  }
  
  function Gi(a, t, e) {
      const s = a.samples.length;
      if (!s) return;
      const i = a.inputTimeScale;
      for (let n = 0; n < s; n++) {
          const o = a.samples[n];
          o.pts = gt(o.pts - e.baseTime * i / e.timescale, t * i) / i
      }
      a.samples.sort((n, o) => n.pts - o.pts);
      const r = a.samples;
      return a.samples = [], {
          samples: r
      }
  }
  class $s {
      constructor(t, e, s, i) {
          this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = s, this.cts = i, this.flags = new ga(t)
      }
  }
  class ga {
      constructor(t) {
          this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
      }
  }
  class ma {
      constructor() {
          this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null
      }
      destroy() {}
      resetTimeStamp(t) {
          this.initPTS = t, this.lastEndTime = null
      }
      resetNextTimestamp() {
          this.lastEndTime = null
      }
      resetInitSegment(t, e, s, i) {
          this.audioCodec = e, this.videoCodec = s, this.generateInitSegment(Fr(t, i)), this.emitInitSegment = !0
      }
      generateInitSegment(t) {
          let {
              audioCodec: e,
              videoCodec: s
          } = this;
          if (!(t != null && t.byteLength)) {
              this.initTracks = void 0, this.initData = void 0;
              return
          }
          const i = this.initData = pi(t);
          e || (e = Gs(i.audio, H.AUDIO)), s || (s = Gs(i.video, H.VIDEO));
          const r = {};
          i.audio && i.video ? r.audiovideo = {
              container: "video/mp4",
              codec: e + "," + s,
              initSegment: t,
              id: "main"
          } : i.audio ? r.audio = {
              container: "audio/mp4",
              codec: e,
              initSegment: t,
              id: "audio"
          } : i.video ? r.video = {
              container: "video/mp4",
              codec: s,
              initSegment: t,
              id: "main"
          } : x.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r
      }
      remux(t, e, s, i, r, n) {
          var o, l;
          let {
              initPTS: c,
              lastEndTime: h
          } = this;
          const u = {
              audio: void 0,
              video: void 0,
              text: i,
              id3: s,
              initSegment: void 0
          };
          F(h) || (h = this.lastEndTime = r || 0);
          const d = e.samples;
          if (!(d != null && d.length)) return u;
          const f = {
              initPTS: void 0,
              timescale: 1
          };
          let g = this.initData;
          if ((o = g) != null && o.length || (this.generateInitSegment(d), g = this.initData), !((l = g) != null && l.length)) return x.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
          this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
          const p = Mr(d, g),
              T = Or(g, d),
              y = T === null ? r : T;
          (pa(c, y, r, p) || f.timescale !== c.timescale && n) && (f.initPTS = y - r, c && c.timescale === 1 && x.warn(`Adjusting initPTS by ${f.initPTS-c.baseTime}`), this.initPTS = c = {
              baseTime: f.initPTS,
              timescale: 1
          });
          const S = t ? y - c.baseTime / c.timescale : h,
              E = S + p;
          Ur(g, d, c.baseTime / c.timescale), p > 0 ? this.lastEndTime = E : (x.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
          const R = !!g.audio,
              A = !!g.video;
          let _ = "";
          R && (_ += "audio"), A && (_ += "video");
          const D = {
              data1: d,
              startPTS: S,
              startDTS: S,
              endPTS: E,
              endDTS: E,
              type: _,
              hasAudio: R,
              hasVideo: A,
              nb: 1,
              dropped: 0
          };
          return u.audio = D.type === "audio" ? D : void 0, u.video = D.type !== "audio" ? D : void 0, u.initSegment = f, u.id3 = $i(s, r, c, c), i.samples.length && (u.text = Gi(i, r, c)), u
      }
  }
  
  function pa(a, t, e, s) {
      if (a === null) return !0;
      const i = Math.max(s, 1),
          r = t - a.baseTime / a.timescale;
      return Math.abs(r - e) > i
  }
  
  function Gs(a, t) {
      const e = a == null ? void 0 : a.codec;
      return e && e.length > 4 ? e : e === "hvc1" || e === "hev1" ? "hvc1.1.6.L120.90" : e === "av01" ? "av01.0.04M.08" : e === "avc1" || t === H.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
  }
  let Lt;
  try {
      Lt = self.performance.now.bind(self.performance)
  } catch {
      x.debug("Unable to use Performance API on this environment"), Lt = typeof self < "u" && self.Date.now
  }
  const Re = [{
      demux: Jn,
      remux: ma
  }, {
      demux: It,
      remux: Le
  }, {
      demux: zn,
      remux: Le
  }, {
      demux: la,
      remux: Le
  }];
  class Ks {
      constructor(t, e, s, i, r) {
          this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = s, this.vendor = i, this.id = r
      }
      configure(t) {
          this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
      }
      push(t, e, s, i) {
          const r = s.transmuxing;
          r.executeStart = Lt();
          let n = new Uint8Array(t);
          const {
              currentTransmuxState: o,
              transmuxConfig: l
          } = this;
          i && (this.currentTransmuxState = i);
          const {
              contiguous: c,
              discontinuity: h,
              trackSwitch: u,
              accurateTimeOffset: d,
              timeOffset: f,
              initSegmentChange: g
          } = i || o, {
              audioCodec: p,
              videoCodec: T,
              defaultInitPts: y,
              duration: S,
              initSegmentData: E
          } = l, R = Ta(n, e);
          if (R && R.method === "AES-128") {
              const C = this.getDecrypter();
              if (C.isSync()) {
                  let k = C.softwareDecrypt(n, R.key.buffer, R.iv.buffer);
                  if (s.part > -1 && (k = C.flush()), !k) return r.executeEnd = Lt(), Ie(s);
                  n = new Uint8Array(k)
              } else return this.decryptionPromise = C.webCryptoDecrypt(n, R.key.buffer, R.iv.buffer).then(k => {
                  const I = this.push(k, null, s);
                  return this.decryptionPromise = null, I
              }), this.decryptionPromise
          }
          const A = this.needsProbing(h, u);
          if (A) {
              const C = this.configureTransmuxer(n);
              if (C) return x.warn(`[transmuxer] ${C.message}`), this.observer.emit(m.ERROR, m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.FRAG_PARSING_ERROR,
                  fatal: !1,
                  error: C,
                  reason: C.message
              }), r.executeEnd = Lt(), Ie(s)
          }(h || u || g || A) && this.resetInitSegment(E, p, T, S, e), (h || g || A) && this.resetInitialTimestamp(y), c || this.resetContiguity();
          const _ = this.transmux(n, R, f, d, s),
              D = this.currentTransmuxState;
          return D.contiguous = !0, D.discontinuity = !1, D.trackSwitch = !1, r.executeEnd = Lt(), _
      }
      flush(t) {
          const e = t.transmuxing;
          e.executeStart = Lt();
          const {
              decrypter: s,
              currentTransmuxState: i,
              decryptionPromise: r
          } = this;
          if (r) return r.then(() => this.flush(t));
          const n = [],
              {
                  timeOffset: o
              } = i;
          if (s) {
              const u = s.flush();
              u && n.push(this.push(u, null, t))
          }
          const {
              demuxer: l,
              remuxer: c
          } = this;
          if (!l || !c) return e.executeEnd = Lt(), [Ie(t)];
          const h = l.flush(o);
          return ie(h) ? h.then(u => (this.flushRemux(n, u, t), n)) : (this.flushRemux(n, h, t), n)
      }
      flushRemux(t, e, s) {
          const {
              audioTrack: i,
              videoTrack: r,
              id3Track: n,
              textTrack: o
          } = e, {
              accurateTimeOffset: l,
              timeOffset: c
          } = this.currentTransmuxState;
          x.log(`[transmuxer.ts]: Flushed fragment ${s.sn}${s.part>-1?" p: "+s.part:""} of level ${s.level}`);
          const h = this.remuxer.remux(i, r, n, o, c, l, !0, this.id);
          t.push({
              remuxResult: h,
              chunkMeta: s
          }), s.transmuxing.executeEnd = Lt()
      }
      resetInitialTimestamp(t) {
          const {
              demuxer: e,
              remuxer: s
          } = this;
          !e || !s || (e.resetTimeStamp(t), s.resetTimeStamp(t))
      }
      resetContiguity() {
          const {
              demuxer: t,
              remuxer: e
          } = this;
          !t || !e || (t.resetContiguity(), e.resetNextTimestamp())
      }
      resetInitSegment(t, e, s, i, r) {
          const {
              demuxer: n,
              remuxer: o
          } = this;
          !n || !o || (n.resetInitSegment(t, e, s, i), o.resetInitSegment(t, e, s, r))
      }
      destroy() {
          this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
      }
      transmux(t, e, s, i, r) {
          let n;
          return e && e.method === "SAMPLE-AES" ? n = this.transmuxSampleAes(t, e, s, i, r) : n = this.transmuxUnencrypted(t, s, i, r), n
      }
      transmuxUnencrypted(t, e, s, i) {
          const {
              audioTrack: r,
              videoTrack: n,
              id3Track: o,
              textTrack: l
          } = this.demuxer.demux(t, e, !1, !this.config.progressive);
          return {
              remuxResult: this.remuxer.remux(r, n, o, l, e, s, !1, this.id),
              chunkMeta: i
          }
      }
      transmuxSampleAes(t, e, s, i, r) {
          return this.demuxer.demuxSampleAes(t, e, s).then(n => ({
              remuxResult: this.remuxer.remux(n.audioTrack, n.videoTrack, n.id3Track, n.textTrack, s, i, !1, this.id),
              chunkMeta: r
          }))
      }
      configureTransmuxer(t) {
          const {
              config: e,
              observer: s,
              typeSupported: i,
              vendor: r
          } = this;
          let n;
          for (let u = 0, d = Re.length; u < d; u++)
              if (Re[u].demux.probe(t)) {
                  n = Re[u];
                  break
              } if (!n) return new Error("Failed to find demuxer by probing fragment data");
          const o = this.demuxer,
              l = this.remuxer,
              c = n.remux,
              h = n.demux;
          (!l || !(l instanceof c)) && (this.remuxer = new c(s, e, i, r)), (!o || !(o instanceof h)) && (this.demuxer = new h(s, e, i), this.probe = h.probe)
      }
      needsProbing(t, e) {
          return !this.demuxer || !this.remuxer || t || e
      }
      getDecrypter() {
          let t = this.decrypter;
          return t || (t = this.decrypter = new ts(this.config)), t
      }
  }
  
  function Ta(a, t) {
      let e = null;
      return a.byteLength > 0 && t != null && t.key != null && t.iv !== null && t.method != null && (e = t), e
  }
  const Ie = a => ({
      remuxResult: {},
      chunkMeta: a
  });
  
  function ie(a) {
      return "then" in a && a.then instanceof Function
  }
  class ya {
      constructor(t, e, s, i, r) {
          this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null
      }
  }
  class xa {
      constructor(t, e, s, i, r, n) {
          this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = n
      }
  }
  var Ki = {
      exports: {}
  };
  (function(a) {
      var t = Object.prototype.hasOwnProperty,
          e = "~";
  
      function s() {}
      Object.create && (s.prototype = Object.create(null), new s().__proto__ || (e = !1));
  
      function i(l, c, h) {
          this.fn = l, this.context = c, this.once = h || !1
      }
  
      function r(l, c, h, u, d) {
          if (typeof h != "function") throw new TypeError("The listener must be a function");
          var f = new i(h, u || l, d),
              g = e ? e + c : c;
          return l._events[g] ? l._events[g].fn ? l._events[g] = [l._events[g], f] : l._events[g].push(f) : (l._events[g] = f, l._eventsCount++), l
      }
  
      function n(l, c) {
          --l._eventsCount === 0 ? l._events = new s : delete l._events[c]
      }
  
      function o() {
          this._events = new s, this._eventsCount = 0
      }
      o.prototype.eventNames = function() {
          var c = [],
              h, u;
          if (this._eventsCount === 0) return c;
          for (u in h = this._events) t.call(h, u) && c.push(e ? u.slice(1) : u);
          return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(h)) : c
      }, o.prototype.listeners = function(c) {
          var h = e ? e + c : c,
              u = this._events[h];
          if (!u) return [];
          if (u.fn) return [u.fn];
          for (var d = 0, f = u.length, g = new Array(f); d < f; d++) g[d] = u[d].fn;
          return g
      }, o.prototype.listenerCount = function(c) {
          var h = e ? e + c : c,
              u = this._events[h];
          return u ? u.fn ? 1 : u.length : 0
      }, o.prototype.emit = function(c, h, u, d, f, g) {
          var p = e ? e + c : c;
          if (!this._events[p]) return !1;
          var T = this._events[p],
              y = arguments.length,
              S, E;
          if (T.fn) {
              switch (T.once && this.removeListener(c, T.fn, void 0, !0), y) {
                  case 1:
                      return T.fn.call(T.context), !0;
                  case 2:
                      return T.fn.call(T.context, h), !0;
                  case 3:
                      return T.fn.call(T.context, h, u), !0;
                  case 4:
                      return T.fn.call(T.context, h, u, d), !0;
                  case 5:
                      return T.fn.call(T.context, h, u, d, f), !0;
                  case 6:
                      return T.fn.call(T.context, h, u, d, f, g), !0
              }
              for (E = 1, S = new Array(y - 1); E < y; E++) S[E - 1] = arguments[E];
              T.fn.apply(T.context, S)
          } else {
              var R = T.length,
                  A;
              for (E = 0; E < R; E++) switch (T[E].once && this.removeListener(c, T[E].fn, void 0, !0), y) {
                  case 1:
                      T[E].fn.call(T[E].context);
                      break;
                  case 2:
                      T[E].fn.call(T[E].context, h);
                      break;
                  case 3:
                      T[E].fn.call(T[E].context, h, u);
                      break;
                  case 4:
                      T[E].fn.call(T[E].context, h, u, d);
                      break;
                  default:
                      if (!S)
                          for (A = 1, S = new Array(y - 1); A < y; A++) S[A - 1] = arguments[A];
                      T[E].fn.apply(T[E].context, S)
              }
          }
          return !0
      }, o.prototype.on = function(c, h, u) {
          return r(this, c, h, u, !1)
      }, o.prototype.once = function(c, h, u) {
          return r(this, c, h, u, !0)
      }, o.prototype.removeListener = function(c, h, u, d) {
          var f = e ? e + c : c;
          if (!this._events[f]) return this;
          if (!h) return n(this, f), this;
          var g = this._events[f];
          if (g.fn) g.fn === h && (!d || g.once) && (!u || g.context === u) && n(this, f);
          else {
              for (var p = 0, T = [], y = g.length; p < y; p++)(g[p].fn !== h || d && !g[p].once || u && g[p].context !== u) && T.push(g[p]);
              T.length ? this._events[f] = T.length === 1 ? T[0] : T : n(this, f)
          }
          return this
      }, o.prototype.removeAllListeners = function(c) {
          var h;
          return c ? (h = e ? e + c : c, this._events[h] && n(this, h)) : (this._events = new s, this._eventsCount = 0), this
      }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, a.exports = o
  })(Ki);
  var Ea = Ki.exports,
      ns = sr(Ea);
  const be = de() || {
      isTypeSupported: () => !1
  };
  class Hi {
      constructor(t, e, s, i) {
          this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
          const r = t.config;
          this.hls = t, this.id = e, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
          const n = (c, h) => {
              h = h || {}, h.frag = this.frag, h.id = this.id, c === m.ERROR && (this.error = h.error), this.hls.trigger(c, h)
          };
          this.observer = new ns, this.observer.on(m.FRAG_DECRYPTED, n), this.observer.on(m.ERROR, n);
          const o = {
                  mp4: be.isTypeSupported("video/mp4"),
                  mpeg: be.isTypeSupported("audio/mpeg"),
                  mp3: be.isTypeSupported('audio/mp4; codecs="mp3"')
              },
              l = navigator.vendor;
          if (this.useWorker && typeof Worker < "u" && (r.workerPath || Gn())) {
              try {
                  r.workerPath ? (x.log(`loading Web Worker ${r.workerPath} for "${e}"`), this.workerContext = Hn(r.workerPath)) : (x.log(`injecting Web Worker for "${e}"`), this.workerContext = Kn()), this.onwmsg = u => this.onWorkerMessage(u);
                  const {
                      worker: h
                  } = this.workerContext;
                  h.addEventListener("message", this.onwmsg), h.onerror = u => {
                      const d = new Error(`${u.message}  (${u.filename}:${u.lineno})`);
                      r.enableWorker = !1, x.warn(`Error in "${e}" Web Worker, fallback to inline`), this.hls.trigger(m.ERROR, {
                          type: N.OTHER_ERROR,
                          details: L.INTERNAL_EXCEPTION,
                          fatal: !1,
                          event: "demuxerWorker",
                          error: d
                      })
                  }, h.postMessage({
                      cmd: "init",
                      typeSupported: o,
                      vendor: l,
                      id: e,
                      config: JSON.stringify(r)
                  })
              } catch (h) {
                  x.warn(`Error setting up "${e}" Web Worker, fallback to inline`, h), this.resetWorker(), this.error = null, this.transmuxer = new Ks(this.observer, o, r, l, e)
              }
              return
          }
          this.transmuxer = new Ks(this.observer, o, r, l, e)
      }
      resetWorker() {
          if (this.workerContext) {
              const {
                  worker: t,
                  objectURL: e
              } = this.workerContext;
              e && self.URL.revokeObjectURL(e), t.removeEventListener("message", this.onwmsg), t.onerror = null, t.terminate(), this.workerContext = null
          }
      }
      destroy() {
          if (this.workerContext) this.resetWorker(), this.onwmsg = void 0;
          else {
              const e = this.transmuxer;
              e && (e.destroy(), this.transmuxer = null)
          }
          const t = this.observer;
          t && t.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null
      }
      push(t, e, s, i, r, n, o, l, c, h) {
          var u, d;
          c.transmuxing.start = self.performance.now();
          const {
              transmuxer: f
          } = this, g = n ? n.start : r.start, p = r.decryptdata, T = this.frag, y = !(T && r.cc === T.cc), S = !(T && c.level === T.level), E = T ? c.sn - T.sn : -1, R = this.part ? c.part - this.part.index : -1, A = E === 0 && c.id > 1 && c.id === (T == null ? void 0 : T.stats.chunkCount), _ = !S && (E === 1 || E === 0 && (R === 1 || A && R <= 0)), D = self.performance.now();
          (S || E || r.stats.parsing.start === 0) && (r.stats.parsing.start = D), n && (R || !_) && (n.stats.parsing.start = D);
          const C = !(T && ((u = r.initSegment) == null ? void 0 : u.url) === ((d = T.initSegment) == null ? void 0 : d.url)),
              k = new xa(y, _, l, S, g, C);
          if (!_ || y || C) {
              x.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
          discontinuity: ${y}
          trackSwitch: ${S}
          contiguous: ${_}
          accurateTimeOffset: ${l}
          timeOffset: ${g}
          initSegmentChange: ${C}`);
              const I = new ya(s, i, e, o, h);
              this.configureTransmuxer(I)
          }
          if (this.frag = r, this.part = n, this.workerContext) this.workerContext.worker.postMessage({
              cmd: "demux",
              data: t,
              decryptdata: p,
              chunkMeta: c,
              state: k
          }, t instanceof ArrayBuffer ? [t] : []);
          else if (f) {
              const I = f.push(t, p, c, k);
              ie(I) ? (f.async = !0, I.then(O => {
                  this.handleTransmuxComplete(O)
              }).catch(O => {
                  this.transmuxerError(O, c, "transmuxer-interface push error")
              })) : (f.async = !1, this.handleTransmuxComplete(I))
          }
      }
      flush(t) {
          t.transmuxing.start = self.performance.now();
          const {
              transmuxer: e
          } = this;
          if (this.workerContext) this.workerContext.worker.postMessage({
              cmd: "flush",
              chunkMeta: t
          });
          else if (e) {
              let s = e.flush(t);
              ie(s) || e.async ? (ie(s) || (s = Promise.resolve(s)), s.then(r => {
                  this.handleFlushResult(r, t)
              }).catch(r => {
                  this.transmuxerError(r, t, "transmuxer-interface flush error")
              })) : this.handleFlushResult(s, t)
          }
      }
      transmuxerError(t, e, s) {
          this.hls && (this.error = t, this.hls.trigger(m.ERROR, {
              type: N.MEDIA_ERROR,
              details: L.FRAG_PARSING_ERROR,
              chunkMeta: e,
              fatal: !1,
              error: t,
              err: t,
              reason: s
          }))
      }
      handleFlushResult(t, e) {
          t.forEach(s => {
              this.handleTransmuxComplete(s)
          }), this.onFlush(e)
      }
      onWorkerMessage(t) {
          const e = t.data,
              s = this.hls;
          switch (e.event) {
              case "init": {
                  var i;
                  const r = (i = this.workerContext) == null ? void 0 : i.objectURL;
                  r && self.URL.revokeObjectURL(r);
                  break
              }
              case "transmuxComplete": {
                  this.handleTransmuxComplete(e.data);
                  break
              }
              case "flush": {
                  this.onFlush(e.data);
                  break
              }
              case "workerLog":
                  x[e.data.logType] && x[e.data.logType](e.data.message);
                  break;
              default: {
                  e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, s.trigger(e.event, e.data);
                  break
              }
          }
      }
      configureTransmuxer(t) {
          const {
              transmuxer: e
          } = this;
          this.workerContext ? this.workerContext.worker.postMessage({
              cmd: "configure",
              config: t
          }) : e && e.configure(t)
      }
      handleTransmuxComplete(t) {
          t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
      }
  }
  const Sa = 250,
      De = 2,
      va = .1,
      Aa = .05;
  class La {
      constructor(t, e, s, i) {
          this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = s, this.hls = i
      }
      destroy() {
          this.media = null, this.hls = this.fragmentTracker = null
      }
      poll(t, e) {
          const {
              config: s,
              media: i,
              stalled: r
          } = this;
          if (i === null) return;
          const {
              currentTime: n,
              seeking: o
          } = i, l = this.seeking && !o, c = !this.seeking && o;
          if (this.seeking = o, n !== t) {
              if (this.moved = !0, r !== null) {
                  if (this.stallReported) {
                      const y = self.performance.now() - r;
                      x.warn(`playback not stuck anymore @${n}, after ${Math.round(y)}ms`), this.stallReported = !1
                  }
                  this.stalled = null, this.nudgeRetry = 0
              }
              return
          }
          if (c || l) {
              this.stalled = null;
              return
          }
          if (i.paused && !o || i.ended || i.playbackRate === 0 || !q.getBuffered(i).length) return;
          const h = q.bufferInfo(i, n, 0),
              u = h.len > 0,
              d = h.nextStart || 0;
          if (!u && !d) return;
          if (o) {
              const y = h.len > De,
                  S = !d || e && e.start <= n || d - n > De && !this.fragmentTracker.getPartialFragment(n);
              if (y || S) return;
              this.moved = !1
          }
          if (!this.moved && this.stalled !== null) {
              var f;
              const y = Math.max(d, h.start || 0) - n,
                  S = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                  R = (S == null || (f = S.details) == null ? void 0 : f.live) ? S.details.targetduration * 2 : De,
                  A = this.fragmentTracker.getPartialFragment(n);
              if (y > 0 && (y <= R || A)) {
                  this._trySkipBufferHole(A);
                  return
              }
          }
          const g = self.performance.now();
          if (r === null) {
              this.stalled = g;
              return
          }
          const p = g - r;
          if (!o && p >= Sa && (this._reportStall(h), !this.media)) return;
          const T = q.bufferInfo(i, n, s.maxBufferHole);
          this._tryFixBufferStall(T, p)
      }
      _tryFixBufferStall(t, e) {
          const {
              config: s,
              fragmentTracker: i,
              media: r
          } = this;
          if (r === null) return;
          const n = r.currentTime,
              o = i.getPartialFragment(n);
          o && (this._trySkipBufferHole(o) || !this.media) || (t.len > s.maxBufferHole || t.nextStart && t.nextStart - n < s.maxBufferHole) && e > s.highBufferWatchdogPeriod * 1e3 && (x.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
      }
      _reportStall(t) {
          const {
              hls: e,
              media: s,
              stallReported: i
          } = this;
          if (!i && s) {
              this.stallReported = !0;
              const r = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(t)})`);
              x.warn(r.message), e.trigger(m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.BUFFER_STALLED_ERROR,
                  fatal: !1,
                  error: r,
                  buffer: t.len
              })
          }
      }
      _trySkipBufferHole(t) {
          const {
              config: e,
              hls: s,
              media: i
          } = this;
          if (i === null) return 0;
          const r = i.currentTime,
              n = q.bufferInfo(i, r, 0),
              o = r < n.start ? n.start : n.nextStart;
          if (o) {
              const l = n.len <= e.maxBufferHole,
                  c = n.len > 0 && n.len < 1 && i.readyState < 3,
                  h = o - r;
              if (h > 0 && (l || c)) {
                  if (h > e.maxBufferHole) {
                      const {
                          fragmentTracker: d
                      } = this;
                      let f = !1;
                      if (r === 0) {
                          const g = d.getAppendedFrag(0, U.MAIN);
                          g && o < g.end && (f = !0)
                      }
                      if (!f) {
                          const g = t || d.getAppendedFrag(r, U.MAIN);
                          if (g) {
                              let p = !1,
                                  T = g.end;
                              for (; T < o;) {
                                  const y = d.getPartialFragment(T);
                                  if (y) T += y.duration;
                                  else {
                                      p = !0;
                                      break
                                  }
                              }
                              if (p) return 0
                          }
                      }
                  }
                  const u = Math.max(o + Aa, r + va);
                  if (x.warn(`skipping hole, adjusting currentTime from ${r} to ${u}`), this.moved = !0, this.stalled = null, i.currentTime = u, t && !t.gap) {
                      const d = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${u}`);
                      s.trigger(m.ERROR, {
                          type: N.MEDIA_ERROR,
                          details: L.BUFFER_SEEK_OVER_HOLE,
                          fatal: !1,
                          error: d,
                          reason: d.message,
                          frag: t
                      })
                  }
                  return u
              }
          }
          return 0
      }
      _tryNudgeBuffer() {
          const {
              config: t,
              hls: e,
              media: s,
              nudgeRetry: i
          } = this;
          if (s === null) return;
          const r = s.currentTime;
          if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
              const n = r + (i + 1) * t.nudgeOffset,
                  o = new Error(`Nudging 'currentTime' from ${r} to ${n}`);
              x.warn(o.message), s.currentTime = n, e.trigger(m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.BUFFER_NUDGE_ON_STALL,
                  error: o,
                  fatal: !1
              })
          } else {
              const n = new Error(`Playhead still not moving while enough data buffered @${r} after ${t.nudgeMaxRetry} nudges`);
              x.error(n.message), e.trigger(m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.BUFFER_STALLED_ERROR,
                  error: n,
                  fatal: !0
              })
          }
      }
  }
  const Ra = 100;
  class Ia extends es {
      constructor(t, e, s) {
          super(t, e, s, "[stream-controller]", U.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners()
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.LEVEL_LOADING, this.onLevelLoading, this), t.on(m.LEVEL_LOADED, this.onLevelLoaded, this), t.on(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(m.ERROR, this.onError, this), t.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(m.BUFFER_CREATED, this.onBufferCreated, this), t.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.LEVEL_LOADED, this.onLevelLoaded, this), t.off(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(m.ERROR, this.onError, this), t.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(m.BUFFER_CREATED, this.onBufferCreated, this), t.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      onHandlerDestroying() {
          this._unregisterListeners(), this.onMediaDetaching()
      }
      startLoad(t) {
          if (this.levels) {
              const {
                  lastCurrentTime: e,
                  hls: s
              } = this;
              if (this.stopLoad(), this.setInterval(Ra), this.level = -1, !this.startFragRequested) {
                  let i = s.startLevel;
                  i === -1 && (s.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = s.nextAutoLevel), this.level = s.nextLoadLevel = i, this.loadedmetadata = !1
              }
              e > 0 && t === -1 && (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e), this.state = b.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
          } else this._forceStartLoad = !0, this.state = b.STOPPED
      }
      stopLoad() {
          this._forceStartLoad = !1, super.stopLoad()
      }
      doTick() {
          switch (this.state) {
              case b.WAITING_LEVEL: {
                  var t;
                  const {
                      levels: s,
                      level: i
                  } = this, r = s == null || (t = s[i]) == null ? void 0 : t.details;
                  if (r && (!r.live || this.levelLastLoaded === this.level)) {
                      if (this.waitForCdnTuneIn(r)) break;
                      this.state = b.IDLE;
                      break
                  } else if (this.hls.nextLoadLevel !== this.level) {
                      this.state = b.IDLE;
                      break
                  }
                  break
              }
              case b.FRAG_LOADING_WAITING_RETRY: {
                  var e;
                  const s = self.performance.now(),
                      i = this.retryDate;
                  (!i || s >= i || (e = this.media) != null && e.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = b.IDLE)
              }
              break
          }
          this.state === b.IDLE && this.doTickIdle(), this.onTickEnd()
      }
      onTickEnd() {
          super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged()
      }
      doTickIdle() {
          const {
              hls: t,
              levelLastLoaded: e,
              levels: s,
              media: i
          } = this, {
              config: r,
              nextLoadLevel: n
          } = t;
          if (e === null || !i && (this.startFragRequested || !r.startFragPrefetch) || this.altAudio && this.audioOnly || !(s != null && s[n])) return;
          const o = s[n],
              l = this.getMainFwdBufferInfo();
          if (l === null) return;
          const c = this.getLevelDetails();
          if (c && this._streamEnded(l, c)) {
              const T = {};
              this.altAudio && (T.type = "video"), this.hls.trigger(m.BUFFER_EOS, T), this.state = b.ENDED;
              return
          }
          t.loadLevel !== n && t.manualLevel === -1 && this.log(`Adapting to level ${n} from level ${this.level}`), this.level = t.nextLoadLevel = n;
          const h = o.details;
          if (!h || this.state === b.WAITING_LEVEL || h.live && this.levelLastLoaded !== n) {
              this.level = n, this.state = b.WAITING_LEVEL;
              return
          }
          const u = l.len,
              d = this.getMaxBufferLength(o.maxBitrate);
          if (u >= d) return;
          this.backtrackFragment && this.backtrackFragment.start > l.end && (this.backtrackFragment = null);
          const f = this.backtrackFragment ? this.backtrackFragment.start : l.end;
          let g = this.getNextFragment(f, h);
          if (this.couldBacktrack && !this.fragPrevious && g && g.sn !== "initSegment" && this.fragmentTracker.getState(g) !== et.OK) {
              var p;
              const y = ((p = this.backtrackFragment) != null ? p : g).sn - h.startSN,
                  S = h.fragments[y - 1];
              S && g.cc === S.cc && (g = S, this.fragmentTracker.removeFragment(S))
          } else this.backtrackFragment && l.len && (this.backtrackFragment = null);
          if (g && this.isLoopLoading(g, f)) {
              if (!g.gap) {
                  const y = this.audioOnly && !this.altAudio ? H.AUDIO : H.VIDEO,
                      S = (y === H.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                  S && this.afterBufferFlushed(S, y, U.MAIN)
              }
              g = this.getNextFragmentLoopLoading(g, h, l, U.MAIN, d)
          }
          g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, o, f))
      }
      loadFragment(t, e, s) {
          const i = this.fragmentTracker.getState(t);
          this.fragCurrent = t, i === et.NOT_LOADED || i === et.PARTIAL ? t.sn === "initSegment" ? this._loadInitSegment(t, e) : this.bitrateTest ? (this.log(`Fragment ${t.sn} of level ${t.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(t, e)) : (this.startFragRequested = !0, super.loadFragment(t, e, s)) : this.clearTrackerIfNeeded(t)
      }
      getBufferedFrag(t) {
          return this.fragmentTracker.getBufferedFrag(t, U.MAIN)
      }
      followingBufferedFrag(t) {
          return t ? this.getBufferedFrag(t.end + .5) : null
      }
      immediateLevelSwitch() {
          this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
      }
      nextLevelSwitch() {
          const {
              levels: t,
              media: e
          } = this;
          if (e != null && e.readyState) {
              let s;
              const i = this.getAppendedFrag(e.currentTime);
              i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
              const r = this.getLevelDetails();
              if (r != null && r.live) {
                  const o = this.getMainFwdBufferInfo();
                  if (!o || o.len < r.targetduration * 2) return
              }
              if (!e.paused && t) {
                  const o = this.hls.nextLoadLevel,
                      l = t[o],
                      c = this.fragLastKbps;
                  c && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * c) + 1 : s = 0
              } else s = 0;
              const n = this.getBufferedFrag(e.currentTime + s);
              if (n) {
                  const o = this.followingBufferedFrag(n);
                  if (o) {
                      this.abortCurrentFrag();
                      const l = o.maxStartPTS ? o.maxStartPTS : o.start,
                          c = o.duration,
                          h = Math.max(n.end, l + Math.min(Math.max(c - this.config.maxFragLookUpTolerance, c * .5), c * .75));
                      this.flushMainBuffer(h, Number.POSITIVE_INFINITY)
                  }
              }
          }
      }
      abortCurrentFrag() {
          const t = this.fragCurrent;
          switch (this.fragCurrent = null, this.backtrackFragment = null, t && (t.abortRequests(), this.fragmentTracker.removeFragment(t)), this.state) {
              case b.KEY_LOADING:
              case b.FRAG_LOADING:
              case b.FRAG_LOADING_WAITING_RETRY:
              case b.PARSING:
              case b.PARSED:
                  this.state = b.IDLE;
                  break
          }
          this.nextLoadPosition = this.getLoadPosition()
      }
      flushMainBuffer(t, e) {
          super.flushMainBuffer(t, e, this.altAudio ? "video" : null)
      }
      onMediaAttached(t, e) {
          super.onMediaAttached(t, e);
          const s = e.media;
          this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), s.addEventListener("playing", this.onvplaying), s.addEventListener("seeked", this.onvseeked), this.gapController = new La(this.config, s, this.fragmentTracker, this.hls)
      }
      onMediaDetaching() {
          const {
              media: t
          } = this;
          t && this.onvplaying && this.onvseeked && (t.removeEventListener("playing", this.onvplaying), t.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching()
      }
      onMediaPlaying() {
          this.tick()
      }
      onMediaSeeked() {
          const t = this.media,
              e = t ? t.currentTime : null;
          F(e) && this.log(`Media seeked to ${e.toFixed(3)}`);
          const s = this.getMainFwdBufferInfo();
          if (s === null || s.len === 0) {
              this.warn(`Main forward buffer length on "seeked" event ${s?s.len:"empty"})`);
              return
          }
          this.tick()
      }
      onManifestLoading() {
          this.log("Trigger BUFFER_RESET"), this.hls.trigger(m.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1
      }
      onManifestParsed(t, e) {
          let s = !1,
              i = !1,
              r;
          e.levels.forEach(n => {
              r = n.audioCodec, r && (r.indexOf("mp4a.40.2") !== -1 && (s = !0), r.indexOf("mp4a.40.5") !== -1 && (i = !0))
          }), this.audioCodecSwitch = s && i && !$n(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
      }
      onLevelLoading(t, e) {
          const {
              levels: s
          } = this;
          if (!s || this.state !== b.IDLE) return;
          const i = s[e.level];
          (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = b.WAITING_LEVEL)
      }
      onLevelLoaded(t, e) {
          var s;
          const {
              levels: i
          } = this, r = e.level, n = e.details, o = n.totalduration;
          if (!i) {
              this.warn(`Levels were reset while loading level ${r}`);
              return
          }
          this.log(`Level ${r} loaded [${n.startSN},${n.endSN}]${n.lastPartSn?`[part-${n.lastPartSn}-${n.lastPartIndex}]`:""}, cc [${n.startCC}, ${n.endCC}] duration:${o}`);
          const l = i[r],
              c = this.fragCurrent;
          c && (this.state === b.FRAG_LOADING || this.state === b.FRAG_LOADING_WAITING_RETRY) && (c.level !== e.level || c.urlId !== l.urlId) && c.loader && this.abortCurrentFrag();
          let h = 0;
          if (n.live || (s = l.details) != null && s.live) {
              if (this.checkLiveUpdate(n), n.deltaUpdateFailed) return;
              h = this.alignPlaylists(n, l.details)
          }
          if (l.details = n, this.levelLastLoaded = r, this.hls.trigger(m.LEVEL_UPDATED, {
                  details: n,
                  level: r
              }), this.state === b.WAITING_LEVEL) {
              if (this.waitForCdnTuneIn(n)) return;
              this.state = b.IDLE
          }
          this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, h), this.tick()
      }
      _handleFragmentLoadProgress(t) {
          var e;
          const {
              frag: s,
              part: i,
              payload: r
          } = t, {
              levels: n
          } = this;
          if (!n) {
              this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
              return
          }
          const o = n[s.level],
              l = o.details;
          if (!l) {
              this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
              return
          }
          const c = o.videoCodec,
              h = l.PTSKnown || !l.live,
              u = (e = s.initSegment) == null ? void 0 : e.data,
              d = this._getAudioCodec(o),
              f = this.transmuxer = this.transmuxer || new Hi(this.hls, U.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
              g = i ? i.index : -1,
              p = g !== -1,
              T = new Je(s.level, s.sn, s.stats.chunkCount, r.byteLength, g, p),
              y = this.initPTS[s.cc];
          f.push(r, u, d, c, s, i, l.totalduration, h, T, y)
      }
      onAudioTrackSwitching(t, e) {
          const s = this.altAudio;
          if (!!!e.url) {
              if (this.mediaBuffer !== this.media) {
                  this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                  const n = this.fragCurrent;
                  n && (this.log("Switching to main audio track, cancel main fragment load"), n.abortRequests(), this.fragmentTracker.removeFragment(n)), this.resetTransmuxer(), this.resetLoadingState()
              } else this.audioOnly && this.resetTransmuxer();
              const r = this.hls;
              s && (r.trigger(m.BUFFER_FLUSHING, {
                  startOffset: 0,
                  endOffset: Number.POSITIVE_INFINITY,
                  type: null
              }), this.fragmentTracker.removeAllFragments()), r.trigger(m.AUDIO_TRACK_SWITCHED, e)
          }
      }
      onAudioTrackSwitched(t, e) {
          const s = e.id,
              i = !!this.hls.audioTracks[s].url;
          if (i) {
              const r = this.videoBuffer;
              r && this.mediaBuffer !== r && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r)
          }
          this.altAudio = i, this.tick()
      }
      onBufferCreated(t, e) {
          const s = e.tracks;
          let i, r, n = !1;
          for (const o in s) {
              const l = s[o];
              if (l.id === "main") {
                  if (r = o, i = l, o === "video") {
                      const c = s[o];
                      c && (this.videoBuffer = c.buffer)
                  }
              } else n = !0
          }
          n && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media
      }
      onFragBuffered(t, e) {
          const {
              frag: s,
              part: i
          } = e;
          if (s && s.type !== U.MAIN) return;
          if (this.fragContextChanged(s)) {
              this.warn(`Fragment ${s.sn}${i?" p: "+i.index:""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === b.PARSED && (this.state = b.IDLE);
              return
          }
          const r = i ? i.stats : s.stats;
          this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), s.sn !== "initSegment" && (this.fragPrevious = s), this.fragBufferedComplete(s, i)
      }
      onError(t, e) {
          var s;
          if (e.fatal) {
              this.state = b.ERROR;
              return
          }
          switch (e.details) {
              case L.FRAG_GAP:
              case L.FRAG_PARSING_ERROR:
              case L.FRAG_DECRYPT_ERROR:
              case L.FRAG_LOAD_ERROR:
              case L.FRAG_LOAD_TIMEOUT:
              case L.KEY_LOAD_ERROR:
              case L.KEY_LOAD_TIMEOUT:
                  this.onFragmentOrKeyLoadError(U.MAIN, e);
                  break;
              case L.LEVEL_LOAD_ERROR:
              case L.LEVEL_LOAD_TIMEOUT:
              case L.LEVEL_PARSING_ERROR:
                  !e.levelRetry && this.state === b.WAITING_LEVEL && ((s = e.context) == null ? void 0 : s.type) === G.LEVEL && (this.state = b.IDLE);
                  break;
              case L.BUFFER_FULL_ERROR:
                  if (!e.parent || e.parent !== "main") return;
                  this.reduceLengthAndFlushBuffer(e) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                  break;
              case L.INTERNAL_EXCEPTION:
                  this.recoverWorkerError(e);
                  break
          }
      }
      checkBuffer() {
          const {
              media: t,
              gapController: e
          } = this;
          if (!(!t || !e || !t.readyState)) {
              if (this.loadedmetadata || !q.getBuffered(t).length) {
                  const s = this.state !== b.IDLE ? this.fragCurrent : null;
                  e.poll(this.lastCurrentTime, s)
              }
              this.lastCurrentTime = t.currentTime
          }
      }
      onFragLoadEmergencyAborted() {
          this.state = b.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
      }
      onBufferFlushed(t, {
          type: e
      }) {
          if (e !== H.AUDIO || this.audioOnly && !this.altAudio) {
              const s = (e === H.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(s, e, U.MAIN)
          }
      }
      onLevelsUpdated(t, e) {
          this.levels = e.levels
      }
      swapAudioCodec() {
          this.audioCodecSwap = !this.audioCodecSwap
      }
      seekToStartPos() {
          const {
              media: t
          } = this;
          if (!t) return;
          const e = t.currentTime;
          let s = this.startPosition;
          if (s >= 0 && e < s) {
              if (t.seeking) {
                  this.log(`could not seek to ${s}, already seeking at ${e}`);
                  return
              }
              const i = q.getBuffered(t),
                  n = (i.length ? i.start(0) : 0) - s;
              n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${n} to match buffer start`), s += n, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${e}`), t.currentTime = s
          }
      }
      _getAudioCodec(t) {
          let e = this.config.defaultAudioCodec || t.audioCodec;
          return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e.indexOf("mp4a.40.5") !== -1 ? e = "mp4a.40.2" : e = "mp4a.40.5"), e
      }
      _loadBitrateTestFrag(t, e) {
          t.bitrateTest = !0, this._doFragLoad(t, e).then(s => {
              const {
                  hls: i
              } = this;
              if (!s || this.fragContextChanged(t)) return;
              e.fragmentError = 0, this.state = b.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
              const r = t.stats;
              r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), i.trigger(m.FRAG_LOADED, s), t.bitrateTest = !1
          })
      }
      _handleTransmuxComplete(t) {
          var e;
          const s = "main",
              {
                  hls: i
              } = this,
              {
                  remuxResult: r,
                  chunkMeta: n
              } = t,
              o = this.getCurrentContext(n);
          if (!o) {
              this.resetWhenMissingContext(n);
              return
          }
          const {
              frag: l,
              part: c,
              level: h
          } = o, {
              video: u,
              text: d,
              id3: f,
              initSegment: g
          } = r, {
              details: p
          } = h, T = this.altAudio ? void 0 : r.audio;
          if (this.fragContextChanged(l)) {
              this.fragmentTracker.removeFragment(l);
              return
          }
          if (this.state = b.PARSING, g) {
              if (g != null && g.tracks) {
                  const E = l.initSegment || l;
                  this._bufferInitSegment(h, g.tracks, E, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
                      frag: E,
                      id: s,
                      tracks: g.tracks
                  })
              }
              const y = g.initPTS,
                  S = g.timescale;
              F(y) && (this.initPTS[l.cc] = {
                  baseTime: y,
                  timescale: S
              }, i.trigger(m.INIT_PTS_FOUND, {
                  frag: l,
                  id: s,
                  initPTS: y,
                  timescale: S
              }))
          }
          if (u && p && l.sn !== "initSegment") {
              const y = p.fragments[l.sn - 1 - p.startSN],
                  S = l.sn === p.startSN,
                  E = !y || l.cc > y.cc;
              if (r.independent !== !1) {
                  const {
                      startPTS: R,
                      endPTS: A,
                      startDTS: _,
                      endDTS: D
                  } = u;
                  if (c) c.elementaryStreams[u.type] = {
                      startPTS: R,
                      endPTS: A,
                      startDTS: _,
                      endDTS: D
                  };
                  else if (u.firstKeyFrame && u.independent && n.id === 1 && !E && (this.couldBacktrack = !0), u.dropped && u.independent) {
                      const C = this.getMainFwdBufferInfo(),
                          k = (C ? C.end : this.getLoadPosition()) + this.config.maxBufferHole,
                          I = u.firstKeyFramePTS ? u.firstKeyFramePTS : R;
                      if (!S && k < I - this.config.maxBufferHole && !E) {
                          this.backtrack(l);
                          return
                      } else E && (l.gap = !0);
                      l.setElementaryStreamInfo(u.type, l.start, A, l.start, D, !0)
                  }
                  l.setElementaryStreamInfo(u.type, R, A, _, D), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(u, l, c, n, S || E)
              } else if (S || E) l.gap = !0;
              else {
                  this.backtrack(l);
                  return
              }
          }
          if (T) {
              const {
                  startPTS: y,
                  endPTS: S,
                  startDTS: E,
                  endDTS: R
              } = T;
              c && (c.elementaryStreams[H.AUDIO] = {
                  startPTS: y,
                  endPTS: S,
                  startDTS: E,
                  endDTS: R
              }), l.setElementaryStreamInfo(H.AUDIO, y, S, E, R), this.bufferFragmentData(T, l, c, n)
          }
          if (p && f != null && (e = f.samples) != null && e.length) {
              const y = {
                  id: s,
                  frag: l,
                  details: p,
                  samples: f.samples
              };
              i.trigger(m.FRAG_PARSING_METADATA, y)
          }
          if (p && d) {
              const y = {
                  id: s,
                  frag: l,
                  details: p,
                  samples: d.samples
              };
              i.trigger(m.FRAG_PARSING_USERDATA, y)
          }
      }
      _bufferInitSegment(t, e, s, i) {
          if (this.state !== b.PARSING) return;
          this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
          const {
              audio: r,
              video: n,
              audiovideo: o
          } = e;
          if (r) {
              let l = t.audioCodec;
              const c = navigator.userAgent.toLowerCase();
              this.audioCodecSwitch && (l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5"), r.metadata.channelCount !== 1 && c.indexOf("firefox") === -1 && (l = "mp4a.40.5")), c.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), t.audioCodec && t.audioCodec !== l && this.log(`Swapping manifest audio codec "${t.audioCodec}" for "${l}"`), r.levelCodec = l, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l||""}/${t.audioCodec||""}/${r.codec}]`)
          }
          n && (n.levelCodec = t.videoCodec, n.id = "main", this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${t.videoCodec||""}/${n.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${t.attrs.CODECS||""}/${o.codec}]`), this.hls.trigger(m.BUFFER_CODECS, e), Object.keys(e).forEach(l => {
              const h = e[l].initSegment;
              h != null && h.byteLength && this.hls.trigger(m.BUFFER_APPENDING, {
                  type: l,
                  data: h,
                  frag: s,
                  part: null,
                  chunkMeta: i,
                  parent: s.type
              })
          }), this.tick()
      }
      getMainFwdBufferInfo() {
          return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, U.MAIN)
      }
      backtrack(t) {
          this.couldBacktrack = !0, this.backtrackFragment = t, this.resetTransmuxer(), this.flushBufferGap(t), this.fragmentTracker.removeFragment(t), this.fragPrevious = null, this.nextLoadPosition = t.start, this.state = b.IDLE
      }
      checkFragmentChanged() {
          const t = this.media;
          let e = null;
          if (t && t.readyState > 1 && t.seeking === !1) {
              const s = t.currentTime;
              if (q.isBuffered(t, s) ? e = this.getAppendedFrag(s) : q.isBuffered(t, s + .1) && (e = this.getAppendedFrag(s + .1)), e) {
                  this.backtrackFragment = null;
                  const i = this.fragPlaying,
                      r = e.level;
                  (!i || e.sn !== i.sn || i.level !== r || e.urlId !== i.urlId) && (this.fragPlaying = e, this.hls.trigger(m.FRAG_CHANGED, {
                      frag: e
                  }), (!i || i.level !== r) && this.hls.trigger(m.LEVEL_SWITCHED, {
                      level: r
                  }))
              }
          }
      }
      get nextLevel() {
          const t = this.nextBufferedFrag;
          return t ? t.level : -1
      }
      get currentFrag() {
          const t = this.media;
          return t ? this.fragPlaying || this.getAppendedFrag(t.currentTime) : null
      }
      get currentProgramDateTime() {
          const t = this.media;
          if (t) {
              const e = t.currentTime,
                  s = this.currentFrag;
              if (s && F(e) && F(s.programDateTime)) {
                  const i = s.programDateTime + (e - s.start) * 1e3;
                  return new Date(i)
              }
          }
          return null
      }
      get currentLevel() {
          const t = this.currentFrag;
          return t ? t.level : -1
      }
      get nextBufferedFrag() {
          const t = this.currentFrag;
          return t ? this.followingBufferedFrag(t) : null
      }
      get forceStartLoad() {
          return this._forceStartLoad
      }
  }
  class Ot {
      constructor(t, e = 0, s = 0) {
          this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = s
      }
      sample(t, e) {
          const s = Math.pow(this.alpha_, t);
          this.estimate_ = e * (1 - s) + s * this.estimate_, this.totalWeight_ += t
      }
      getTotalWeight() {
          return this.totalWeight_
      }
      getEstimate() {
          if (this.alpha_) {
              const t = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (t) return this.estimate_ / t
          }
          return this.estimate_
      }
  }
  class ba {
      constructor(t, e, s, i = 100) {
          this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Ot(t), this.fast_ = new Ot(e), this.defaultTTFB_ = i, this.ttfb_ = new Ot(t)
      }
      update(t, e) {
          const {
              slow_: s,
              fast_: i,
              ttfb_: r
          } = this;
          s.halfLife !== t && (this.slow_ = new Ot(t, s.getEstimate(), s.getTotalWeight())), i.halfLife !== e && (this.fast_ = new Ot(e, i.getEstimate(), i.getTotalWeight())), r.halfLife !== t && (this.ttfb_ = new Ot(t, r.getEstimate(), r.getTotalWeight()))
      }
      sample(t, e) {
          t = Math.max(t, this.minDelayMs_);
          const s = 8 * e,
              i = t / 1e3,
              r = s / i;
          this.fast_.sample(i, r), this.slow_.sample(i, r)
      }
      sampleTTFB(t) {
          const e = t / 1e3,
              s = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
          this.ttfb_.sample(s, Math.max(t, 5))
      }
      canEstimate() {
          return this.fast_.getTotalWeight() >= this.minWeight_
      }
      getEstimate() {
          return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
      }
      getEstimateTTFB() {
          return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_
      }
      destroy() {}
  }
  class Da {
      constructor(t) {
          this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
          const e = t.config;
          this.bwEstimator = new ba(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.FRAG_LOADING, this.onFragLoading, this), t.on(m.FRAG_LOADED, this.onFragLoaded, this), t.on(m.FRAG_BUFFERED, this.onFragBuffered, this), t.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(m.LEVEL_LOADED, this.onLevelLoaded, this)
      }
      unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.FRAG_LOADING, this.onFragLoading, this), t.off(m.FRAG_LOADED, this.onFragLoaded, this), t.off(m.FRAG_BUFFERED, this.onFragBuffered, this), t.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(m.LEVEL_LOADED, this.onLevelLoaded, this)
      }
      destroy() {
          this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
      }
      onFragLoading(t, e) {
          var s;
          const i = e.frag;
          this.ignoreFragment(i) || (this.fragCurrent = i, this.partCurrent = (s = e.part) != null ? s : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100))
      }
      onLevelSwitching(t, e) {
          this.clearTimer()
      }
      getTimeToLoadFrag(t, e, s, i) {
          const r = t + s / e,
              n = i ? this.lastLevelLoadSec : 0;
          return r + n
      }
      onLevelLoaded(t, e) {
          const s = this.hls.config,
              {
                  total: i,
                  bwEstimate: r
              } = e.stats;
          F(i) && F(r) && (this.lastLevelLoadSec = 8 * i / r), e.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD)
      }
      _abandonRulesCheck() {
          const {
              fragCurrent: t,
              partCurrent: e,
              hls: s
          } = this, {
              autoLevelEnabled: i,
              media: r
          } = s;
          if (!t || !r) return;
          const n = performance.now(),
              o = e ? e.stats : t.stats,
              l = e ? e.duration : t.duration,
              c = n - o.loading.start;
          if (o.aborted || o.loaded && o.loaded === o.total || t.level === 0) {
              this.clearTimer(), this._nextAutoLevel = -1;
              return
          }
          if (!i || r.paused || !r.playbackRate || !r.readyState) return;
          const h = s.mainForwardBufferInfo;
          if (h === null) return;
          const u = this.bwEstimator.getEstimateTTFB(),
              d = Math.abs(r.playbackRate);
          if (c <= Math.max(u, 1e3 * (l / (d * 2)))) return;
          const f = h.len / d;
          if (f >= 2 * l / d) return;
          const g = o.loading.first ? o.loading.first - o.loading.start : -1,
              p = o.loaded && g > -1,
              T = this.bwEstimator.getEstimate(),
              {
                  levels: y,
                  minAutoLevel: S
              } = s,
              E = y[t.level],
              R = o.total || Math.max(o.loaded, Math.round(l * E.maxBitrate / 8));
          let A = c - g;
          A < 1 && p && (A = Math.min(c, o.loaded * 8 / T));
          const _ = p ? o.loaded * 1e3 / A : 0,
              D = _ ? (R - o.loaded) / _ : R * 8 / T + u / 1e3;
          if (D <= f) return;
          const C = _ ? _ * 8 : T;
          let k = Number.POSITIVE_INFINITY,
              I;
          for (I = t.level - 1; I > S; I--) {
              const O = y[I].maxBitrate;
              if (k = this.getTimeToLoadFrag(u / 1e3, C, l * O, !y[I].details), k < f) break
          }
          k >= D || k > l * 10 || (s.nextLoadLevel = I, p ? this.bwEstimator.sample(c - Math.min(u, g), o.loaded) : this.bwEstimator.sampleTTFB(c), this.clearTimer(), x.warn(`[abr] Fragment ${t.sn}${e?" part "+e.index:""} of level ${t.level} is loading too slowly;
        Time to underbuffer: ${f.toFixed(3)} s
        Estimated load time for current fragment: ${D.toFixed(3)} s
        Estimated load time for down switch fragment: ${k.toFixed(3)} s
        TTFB estimate: ${g}
        Current BW estimate: ${F(T)?(T/1024).toFixed(3):"Unknown"} Kb/s
        New BW estimate: ${(this.bwEstimator.getEstimate()/1024).toFixed(3)} Kb/s
        Aborting and switching to level ${I}`), t.loader && (this.fragCurrent = this.partCurrent = null, t.abortRequests()), s.trigger(m.FRAG_LOAD_EMERGENCY_ABORTED, {
              frag: t,
              part: e,
              stats: o
          }))
      }
      onFragLoaded(t, {
          frag: e,
          part: s
      }) {
          const i = s ? s.stats : e.stats;
          if (e.type === U.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(e)) {
              if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                  const r = s ? s.duration : e.duration,
                      n = this.hls.levels[e.level],
                      o = (n.loaded ? n.loaded.bytes : 0) + i.loaded,
                      l = (n.loaded ? n.loaded.duration : 0) + r;
                  n.loaded = {
                      bytes: o,
                      duration: l
                  }, n.realBitrate = Math.round(8 * o / l)
              }
              if (e.bitrateTest) {
                  const r = {
                      stats: i,
                      frag: e,
                      part: s,
                      id: e.type
                  };
                  this.onFragBuffered(m.FRAG_BUFFERED, r), e.bitrateTest = !1
              }
          }
      }
      onFragBuffered(t, e) {
          const {
              frag: s,
              part: i
          } = e, r = i != null && i.stats.loaded ? i.stats : s.stats;
          if (r.aborted || this.ignoreFragment(s)) return;
          const n = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
          this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.bwEstimator.getEstimate(), s.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
      }
      ignoreFragment(t) {
          return t.type !== U.MAIN || t.sn === "initSegment"
      }
      clearTimer() {
          self.clearInterval(this.timer)
      }
      get nextAutoLevel() {
          const t = this._nextAutoLevel,
              e = this.bwEstimator;
          if (t !== -1 && !e.canEstimate()) return t;
          let s = this.getNextABRAutoLevel();
          if (t !== -1) {
              const i = this.hls.levels;
              if (i.length > Math.max(t, s) && i[t].loadError <= i[s].loadError) return t
          }
          return t !== -1 && (s = Math.min(t, s)), s
      }
      getNextABRAutoLevel() {
          const {
              fragCurrent: t,
              partCurrent: e,
              hls: s
          } = this, {
              maxAutoLevel: i,
              config: r,
              minAutoLevel: n,
              media: o
          } = s, l = e ? e.duration : t ? t.duration : 0, c = o && o.playbackRate !== 0 ? Math.abs(o.playbackRate) : 1, h = this.bwEstimator ? this.bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate, u = s.mainForwardBufferInfo, d = (u ? u.len : 0) / c;
          let f = this.findBestLevel(h, n, i, d, r.abrBandWidthFactor, r.abrBandWidthUpFactor);
          if (f >= 0) return f;
          x.trace(`[abr] ${d?"rebuffering expected":"buffer is empty"}, finding optimal quality level`);
          let g = l ? Math.min(l, r.maxStarvationDelay) : r.maxStarvationDelay,
              p = r.abrBandWidthFactor,
              T = r.abrBandWidthUpFactor;
          if (!d) {
              const y = this.bitrateTestDelay;
              y && (g = (l ? Math.min(l, r.maxLoadingDelay) : r.maxLoadingDelay) - y, x.trace(`[abr] bitrate test took ${Math.round(1e3*y)}ms, set first fragment max fetchDuration to ${Math.round(1e3*g)} ms`), p = T = 1)
          }
          return f = this.findBestLevel(h, n, i, d + g, p, T), Math.max(f, 0)
      }
      findBestLevel(t, e, s, i, r, n) {
          var o;
          const {
              fragCurrent: l,
              partCurrent: c,
              lastLoadedFragLevel: h
          } = this, {
              levels: u
          } = this.hls, d = u[h], f = !!(d != null && (o = d.details) != null && o.live), g = d == null ? void 0 : d.codecSet, p = c ? c.duration : l ? l.duration : 0, T = this.bwEstimator.getEstimateTTFB() / 1e3;
          let y = e,
              S = -1;
          for (let E = s; E >= e; E--) {
              const R = u[E];
              if (!R || g && R.codecSet !== g) {
                  R && (y = Math.min(E, y), S = Math.max(E, S));
                  continue
              }
              S !== -1 && x.trace(`[abr] Skipped level(s) ${y}-${S} with CODECS:"${u[S].attrs.CODECS}"; not compatible with "${d.attrs.CODECS}"`);
              const A = R.details,
                  _ = (c ? A == null ? void 0 : A.partTarget : A == null ? void 0 : A.averagetargetduration) || p;
              let D;
              E <= h ? D = r * t : D = n * t;
              const C = u[E].maxBitrate,
                  k = this.getTimeToLoadFrag(T, D, C * _, A === void 0);
              if (x.trace(`[abr] level:${E} adjustedbw-bitrate:${Math.round(D-C)} avgDuration:${_.toFixed(1)} maxFetchDuration:${i.toFixed(1)} fetchDuration:${k.toFixed(1)}`), D > C && (k === 0 || !F(k) || f && !this.bitrateTestDelay || k < i)) return E
          }
          return -1
      }
      set nextAutoLevel(t) {
          this._nextAutoLevel = t
      }
  }
  class Vi {
      constructor() {
          this.chunks = [], this.dataLength = 0
      }
      push(t) {
          this.chunks.push(t), this.dataLength += t.length
      }
      flush() {
          const {
              chunks: t,
              dataLength: e
          } = this;
          let s;
          if (t.length) t.length === 1 ? s = t[0] : s = Ca(t, e);
          else return new Uint8Array(0);
          return this.reset(), s
      }
      reset() {
          this.chunks.length = 0, this.dataLength = 0
      }
  }
  
  function Ca(a, t) {
      const e = new Uint8Array(t);
      let s = 0;
      for (let i = 0; i < a.length; i++) {
          const r = a[i];
          e.set(r, s), s += r.length
      }
      return e
  }
  const Hs = 100;
  class ka extends es {
      constructor(t, e, s) {
          super(t, e, s, "[audio-stream-controller]", U.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners()
      }
      onHandlerDestroying() {
          this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.LEVEL_LOADED, this.onLevelLoaded, this), t.on(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(m.ERROR, this.onError, this), t.on(m.BUFFER_RESET, this.onBufferReset, this), t.on(m.BUFFER_CREATED, this.onBufferCreated, this), t.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.LEVEL_LOADED, this.onLevelLoaded, this), t.off(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(m.ERROR, this.onError, this), t.off(m.BUFFER_RESET, this.onBufferReset, this), t.off(m.BUFFER_CREATED, this.onBufferCreated, this), t.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      onInitPtsFound(t, {
          frag: e,
          id: s,
          initPTS: i,
          timescale: r
      }) {
          if (s === "main") {
              const n = e.cc;
              this.initPTS[e.cc] = {
                  baseTime: i,
                  timescale: r
              }, this.log(`InitPTS for cc: ${n} found from main: ${i}`), this.videoTrackCC = n, this.state === b.WAITING_INIT_PTS && this.tick()
          }
      }
      startLoad(t) {
          if (!this.levels) {
              this.startPosition = t, this.state = b.STOPPED;
              return
          }
          const e = this.lastCurrentTime;
          this.stopLoad(), this.setInterval(Hs), e > 0 && t === -1 ? (this.log(`Override startPosition with lastCurrentTime @${e.toFixed(3)}`), t = e, this.state = b.IDLE) : (this.loadedmetadata = !1, this.state = b.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
      }
      doTick() {
          switch (this.state) {
              case b.IDLE:
                  this.doTickIdle();
                  break;
              case b.WAITING_TRACK: {
                  var t;
                  const {
                      levels: s,
                      trackId: i
                  } = this, r = s == null || (t = s[i]) == null ? void 0 : t.details;
                  if (r) {
                      if (this.waitForCdnTuneIn(r)) break;
                      this.state = b.WAITING_INIT_PTS
                  }
                  break
              }
              case b.FRAG_LOADING_WAITING_RETRY: {
                  var e;
                  const s = performance.now(),
                      i = this.retryDate;
                  (!i || s >= i || (e = this.media) != null && e.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = b.IDLE);
                  break
              }
              case b.WAITING_INIT_PTS: {
                  const s = this.waitingData;
                  if (s) {
                      const {
                          frag: i,
                          part: r,
                          cache: n,
                          complete: o
                      } = s;
                      if (this.initPTS[i.cc] !== void 0) {
                          this.waitingData = null, this.waitingVideoCC = -1, this.state = b.FRAG_LOADING;
                          const l = n.flush(),
                              c = {
                                  frag: i,
                                  part: r,
                                  payload: l,
                                  networkDetails: null
                              };
                          this._handleFragmentLoadProgress(c), o && super._handleFragmentLoadComplete(c)
                      } else if (this.videoTrackCC !== this.waitingVideoCC) this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
                      else {
                          const l = this.getLoadPosition(),
                              c = q.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
                          He(c.end, this.config.maxFragLookUpTolerance, i) < 0 && (this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`), this.clearWaitingFragment())
                      }
                  } else this.state = b.IDLE
              }
          }
          this.onTickEnd()
      }
      clearWaitingFragment() {
          const t = this.waitingData;
          t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = b.IDLE)
      }
      resetLoadingState() {
          this.clearWaitingFragment(), super.resetLoadingState()
      }
      onTickEnd() {
          const {
              media: t
          } = this;
          t != null && t.readyState && (this.lastCurrentTime = t.currentTime)
      }
      doTickIdle() {
          const {
              hls: t,
              levels: e,
              media: s,
              trackId: i
          } = this, r = t.config;
          if (!(e != null && e[i]) || !s && (this.startFragRequested || !r.startFragPrefetch)) return;
          const n = e[i],
              o = n.details;
          if (!o || o.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(o)) {
              this.state = b.WAITING_TRACK;
              return
          }
          const l = this.mediaBuffer ? this.mediaBuffer : this.media;
          this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, H.AUDIO, U.AUDIO));
          const c = this.getFwdBufferInfo(l, U.AUDIO);
          if (c === null) return;
          const {
              bufferedTrack: h,
              switchingTrack: u
          } = this;
          if (!u && this._streamEnded(c, o)) {
              t.trigger(m.BUFFER_EOS, {
                  type: "audio"
              }), this.state = b.ENDED;
              return
          }
          const d = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, U.MAIN),
              f = c.len,
              g = this.getMaxBufferLength(d == null ? void 0 : d.len);
          if (f >= g && !u) return;
          const T = o.fragments[0].start;
          let y = c.end;
          if (u && s) {
              const A = this.getLoadPosition();
              h && u.attrs !== h.attrs && (y = A), o.PTSKnown && A < T && (c.end > T || c.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s.currentTime = T + .05)
          }
          let S = this.getNextFragment(y, o),
              E = !1;
          if (S && this.isLoopLoading(S, y) && (E = !!S.gap, S = this.getNextFragmentLoopLoading(S, o, c, U.MAIN, g)), !S) {
              this.bufferFlushed = !0;
              return
          }
          const R = d && S.start > d.end + o.targetduration;
          if (R || !(d != null && d.len) && c.len) {
              const A = this.getAppendedFrag(S.start, U.MAIN);
              if (A === null || (E || (E = !!A.gap || !!R && d.len === 0), R && !E || E && c.nextStart && c.nextStart < A.end)) return
          }
          this.loadFragment(S, n, y)
      }
      getMaxBufferLength(t) {
          const e = super.getMaxBufferLength();
          return t ? Math.min(Math.max(e, t), this.config.maxMaxBufferLength) : e
      }
      onMediaDetaching() {
          this.videoBuffer = null, super.onMediaDetaching()
      }
      onAudioTracksUpdated(t, {
          audioTracks: e
      }) {
          this.resetTransmuxer(), this.levels = e.map(s => new Wt(s))
      }
      onAudioTrackSwitching(t, e) {
          const s = !!e.url;
          this.trackId = e.id;
          const {
              fragCurrent: i
          } = this;
          i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? this.setInterval(Hs) : this.resetTransmuxer(), s ? (this.switchingTrack = e, this.state = b.IDLE) : (this.switchingTrack = null, this.bufferedTrack = e, this.state = b.STOPPED), this.tick()
      }
      onManifestLoading() {
          this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1
      }
      onLevelLoaded(t, e) {
          this.mainDetails = e.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(m.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null)
      }
      onAudioTrackLoaded(t, e) {
          var s;
          if (this.mainDetails == null) {
              this.cachedTrackLoadedData = e;
              return
          }
          const {
              levels: i
          } = this, {
              details: r,
              id: n
          } = e;
          if (!i) {
              this.warn(`Audio tracks were reset while loading level ${n}`);
              return
          }
          this.log(`Track ${n} loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);
          const o = i[n];
          let l = 0;
          if (r.live || (s = o.details) != null && s.live) {
              this.checkLiveUpdate(r);
              const c = this.mainDetails;
              if (r.deltaUpdateFailed || !c) return;
              !o.details && r.hasProgramDateTime && c.hasProgramDateTime ? (Di(r, c), l = r.fragments[0].start) : l = this.alignPlaylists(r, o.details)
          }
          o.details = r, this.levelLastLoaded = n, !this.startFragRequested && (this.mainDetails || !r.live) && this.setStartPosition(o.details, l), this.state === b.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = b.IDLE), this.tick()
      }
      _handleFragmentLoadProgress(t) {
          var e;
          const {
              frag: s,
              part: i,
              payload: r
          } = t, {
              config: n,
              trackId: o,
              levels: l
          } = this;
          if (!l) {
              this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
              return
          }
          const c = l[o];
          if (!c) {
              this.warn("Audio track is undefined on fragment load progress");
              return
          }
          const h = c.details;
          if (!h) {
              this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
              return
          }
          const u = n.defaultAudioCodec || c.audioCodec || "mp4a.40.2";
          let d = this.transmuxer;
          d || (d = this.transmuxer = new Hi(this.hls, U.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
          const f = this.initPTS[s.cc],
              g = (e = s.initSegment) == null ? void 0 : e.data;
          if (f !== void 0) {
              const T = i ? i.index : -1,
                  y = T !== -1,
                  S = new Je(s.level, s.sn, s.stats.chunkCount, r.byteLength, T, y);
              d.push(r, g, u, "", s, i, h.totalduration, !1, S, f)
          } else {
              this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${h.startSN} ,${h.endSN}],track ${o}`);
              const {
                  cache: p
              } = this.waitingData = this.waitingData || {
                  frag: s,
                  part: i,
                  cache: new Vi,
                  complete: !1
              };
              p.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = b.WAITING_INIT_PTS
          }
      }
      _handleFragmentLoadComplete(t) {
          if (this.waitingData) {
              this.waitingData.complete = !0;
              return
          }
          super._handleFragmentLoadComplete(t)
      }
      onBufferReset() {
          this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
      }
      onBufferCreated(t, e) {
          const s = e.tracks.audio;
          s && (this.mediaBuffer = s.buffer || null), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer || null)
      }
      onFragBuffered(t, e) {
          const {
              frag: s,
              part: i
          } = e;
          if (s.type !== U.AUDIO) {
              if (!this.loadedmetadata && s.type === U.MAIN) {
                  const r = this.videoBuffer || this.media;
                  r && q.getBuffered(r).length && (this.loadedmetadata = !0)
              }
              return
          }
          if (this.fragContextChanged(s)) {
              this.warn(`Fragment ${s.sn}${i?" p: "+i.index:""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);
              return
          }
          if (s.sn !== "initSegment") {
              this.fragPrevious = s;
              const r = this.switchingTrack;
              r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(m.AUDIO_TRACK_SWITCHED, at({}, r)))
          }
          this.fragBufferedComplete(s, i)
      }
      onError(t, e) {
          var s;
          if (e.fatal) {
              this.state = b.ERROR;
              return
          }
          switch (e.details) {
              case L.FRAG_GAP:
              case L.FRAG_PARSING_ERROR:
              case L.FRAG_DECRYPT_ERROR:
              case L.FRAG_LOAD_ERROR:
              case L.FRAG_LOAD_TIMEOUT:
              case L.KEY_LOAD_ERROR:
              case L.KEY_LOAD_TIMEOUT:
                  this.onFragmentOrKeyLoadError(U.AUDIO, e);
                  break;
              case L.AUDIO_TRACK_LOAD_ERROR:
              case L.AUDIO_TRACK_LOAD_TIMEOUT:
              case L.LEVEL_PARSING_ERROR:
                  !e.levelRetry && this.state === b.WAITING_TRACK && ((s = e.context) == null ? void 0 : s.type) === G.AUDIO_TRACK && (this.state = b.IDLE);
                  break;
              case L.BUFFER_FULL_ERROR:
                  if (!e.parent || e.parent !== "audio") return;
                  this.reduceLengthAndFlushBuffer(e) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
                  break;
              case L.INTERNAL_EXCEPTION:
                  this.recoverWorkerError(e);
                  break
          }
      }
      onBufferFlushed(t, {
          type: e
      }) {
          e === H.AUDIO && (this.bufferFlushed = !0, this.state === b.ENDED && (this.state = b.IDLE))
      }
      _handleTransmuxComplete(t) {
          var e;
          const s = "audio",
              {
                  hls: i
              } = this,
              {
                  remuxResult: r,
                  chunkMeta: n
              } = t,
              o = this.getCurrentContext(n);
          if (!o) {
              this.resetWhenMissingContext(n);
              return
          }
          const {
              frag: l,
              part: c,
              level: h
          } = o, {
              details: u
          } = h, {
              audio: d,
              text: f,
              id3: g,
              initSegment: p
          } = r;
          if (this.fragContextChanged(l) || !u) {
              this.fragmentTracker.removeFragment(l);
              return
          }
          if (this.state = b.PARSING, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), p != null && p.tracks) {
              const T = l.initSegment || l;
              this._bufferInitSegment(p.tracks, T, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
                  frag: T,
                  id: s,
                  tracks: p.tracks
              })
          }
          if (d) {
              const {
                  startPTS: T,
                  endPTS: y,
                  startDTS: S,
                  endDTS: E
              } = d;
              c && (c.elementaryStreams[H.AUDIO] = {
                  startPTS: T,
                  endPTS: y,
                  startDTS: S,
                  endDTS: E
              }), l.setElementaryStreamInfo(H.AUDIO, T, y, S, E), this.bufferFragmentData(d, l, c, n)
          }
          if (g != null && (e = g.samples) != null && e.length) {
              const T = tt({
                  id: s,
                  frag: l,
                  details: u
              }, g);
              i.trigger(m.FRAG_PARSING_METADATA, T)
          }
          if (f) {
              const T = tt({
                  id: s,
                  frag: l,
                  details: u
              }, f);
              i.trigger(m.FRAG_PARSING_USERDATA, T)
          }
      }
      _bufferInitSegment(t, e, s) {
          if (this.state !== b.PARSING) return;
          t.video && delete t.video;
          const i = t.audio;
          if (!i) return;
          i.levelCodec = i.codec, i.id = "audio", this.log(`Init audio buffer, container:${i.container}, codecs[parsed]=[${i.codec}]`), this.hls.trigger(m.BUFFER_CODECS, t);
          const r = i.initSegment;
          if (r != null && r.byteLength) {
              const n = {
                  type: "audio",
                  frag: e,
                  part: null,
                  chunkMeta: s,
                  parent: e.type,
                  data: r
              };
              this.hls.trigger(m.BUFFER_APPENDING, n)
          }
          this.tick()
      }
      loadFragment(t, e, s) {
          const i = this.fragmentTracker.getState(t);
          if (this.fragCurrent = t, this.switchingTrack || i === et.NOT_LOADED || i === et.PARTIAL) {
              var r;
              t.sn === "initSegment" ? this._loadInitSegment(t, e) : (r = e.details) != null && r.live && !this.initPTS[t.cc] ? (this.log(`Waiting for video PTS in continuity counter ${t.cc} of live stream before loading audio fragment ${t.sn} of level ${this.trackId}`), this.state = b.WAITING_INIT_PTS) : (this.startFragRequested = !0, super.loadFragment(t, e, s))
          } else this.clearTrackerIfNeeded(t)
      }
      completeAudioSwitch(t) {
          const {
              hls: e,
              media: s,
              bufferedTrack: i
          } = this, r = i == null ? void 0 : i.attrs, n = t.attrs;
          s && r && (r.CHANNELS !== n.CHANNELS || r.NAME !== n.NAME || r.LANGUAGE !== n.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = t, this.switchingTrack = null, e.trigger(m.AUDIO_TRACK_SWITCHED, at({}, t))
      }
  }
  class _a extends Qe {
      constructor(t) {
          super(t, "[audio-track-controller]"), this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners()
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.LEVEL_LOADING, this.onLevelLoading, this), t.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(m.ERROR, this.onError, this)
      }
      unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.LEVEL_LOADING, this.onLevelLoading, this), t.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(m.ERROR, this.onError, this)
      }
      destroy() {
          this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy()
      }
      onManifestLoading() {
          this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0
      }
      onManifestParsed(t, e) {
          this.tracks = e.audioTracks || []
      }
      onAudioTrackLoaded(t, e) {
          const {
              id: s,
              groupId: i,
              details: r
          } = e, n = this.tracksInGroup[s];
          if (!n || n.groupId !== i) {
              this.warn(`Track with id:${s} and group:${i} not found in active group ${n.groupId}`);
              return
          }
          const o = n.details;
          n.details = e.details, this.log(`audio-track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, o)
      }
      onLevelLoading(t, e) {
          this.switchLevel(e.level)
      }
      onLevelSwitching(t, e) {
          this.switchLevel(e.level)
      }
      switchLevel(t) {
          const e = this.hls.levels[t];
          if (!(e != null && e.audioGroupIds)) return;
          const s = e.audioGroupIds[e.urlId];
          if (this.groupId !== s) {
              this.groupId = s || null;
              const i = this.tracks.filter(n => !s || n.groupId === s);
              this.selectDefaultTrack && !i.some(n => n.default) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
              const r = {
                  audioTracks: i
              };
              this.log(`Updating audio tracks, ${i.length} track(s) found in group:${s}`), this.hls.trigger(m.AUDIO_TRACKS_UPDATED, r), this.selectInitialTrack()
          } else this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId)
      }
      onError(t, e) {
          e.fatal || !e.context || e.context.type === G.AUDIO_TRACK && e.context.id === this.trackId && e.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(e))
      }
      get audioTracks() {
          return this.tracksInGroup
      }
      get audioTrack() {
          return this.trackId
      }
      set audioTrack(t) {
          this.selectDefaultTrack = !1, this.setAudioTrack(t)
      }
      setAudioTrack(t) {
          const e = this.tracksInGroup;
          if (t < 0 || t >= e.length) {
              this.warn("Invalid id passed to audio-track controller");
              return
          }
          this.clearTimer();
          const s = this.currentTrack;
          e[this.trackId];
          const i = e[t],
              {
                  groupId: r,
                  name: n
              } = i;
          if (this.log(`Switching to audio-track ${t} "${n}" lang:${i.lang} group:${r}`), this.trackId = t, this.currentTrack = i, this.selectDefaultTrack = !1, this.hls.trigger(m.AUDIO_TRACK_SWITCHING, at({}, i)), i.details && !i.details.live) return;
          const o = this.switchParams(i.url, s == null ? void 0 : s.details);
          this.loadPlaylist(o)
      }
      selectInitialTrack() {
          const t = this.tracksInGroup,
              e = this.findTrackId(this.currentTrack) | this.findTrackId(null);
          if (e !== -1) this.setAudioTrack(e);
          else {
              const s = new Error(`No track found for running audio group-ID: ${this.groupId} track count: ${t.length}`);
              this.warn(s.message), this.hls.trigger(m.ERROR, {
                  type: N.MEDIA_ERROR,
                  details: L.AUDIO_TRACK_LOAD_ERROR,
                  fatal: !0,
                  error: s
              })
          }
      }
      findTrackId(t) {
          const e = this.tracksInGroup;
          for (let s = 0; s < e.length; s++) {
              const i = e[s];
              if ((!this.selectDefaultTrack || i.default) && (!t || t.attrs["STABLE-RENDITION-ID"] !== void 0 && t.attrs["STABLE-RENDITION-ID"] === i.attrs["STABLE-RENDITION-ID"] || t.name === i.name && t.lang === i.lang)) return i.id
          }
          return -1
      }
      loadPlaylist(t) {
          super.loadPlaylist();
          const e = this.tracksInGroup[this.trackId];
          if (this.shouldLoadPlaylist(e)) {
              const s = e.id,
                  i = e.groupId;
              let r = e.url;
              if (t) try {
                  r = t.addDirectives(r)
              } catch (n) {
                  this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`)
              }
              this.log(`loading audio-track playlist ${s} "${e.name}" lang:${e.lang} group:${i}`), this.clearTimer(), this.hls.trigger(m.AUDIO_TRACK_LOADING, {
                  url: r,
                  id: s,
                  groupId: i,
                  deliveryDirectives: t || null
              })
          }
      }
  }
  
  function Wi(a, t) {
      if (a.length !== t.length) return !1;
      for (let e = 0; e < a.length; e++)
          if (!wa(a[e].attrs, t[e].attrs)) return !1;
      return !0
  }
  
  function wa(a, t) {
      const e = a["STABLE-RENDITION-ID"];
      return e ? e === t["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some(s => a[s] !== t[s])
  }
  const Vs = 500;
  class Pa extends es {
      constructor(t, e, s) {
          super(t, e, s, "[subtitle-stream-controller]", U.SUBTITLE), this.levels = [], this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners()
      }
      onHandlerDestroying() {
          this._unregisterListeners(), this.mainDetails = null
      }
      _registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.LEVEL_LOADED, this.onLevelLoaded, this), t.on(m.ERROR, this.onError, this), t.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      _unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.LEVEL_LOADED, this.onLevelLoaded, this), t.off(m.ERROR, this.onError, this), t.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(m.FRAG_BUFFERED, this.onFragBuffered, this)
      }
      startLoad(t) {
          this.stopLoad(), this.state = b.IDLE, this.setInterval(Vs), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
      }
      onManifestLoading() {
          this.mainDetails = null, this.fragmentTracker.removeAllFragments()
      }
      onMediaDetaching() {
          this.tracksBuffered = [], super.onMediaDetaching()
      }
      onLevelLoaded(t, e) {
          this.mainDetails = e.details
      }
      onSubtitleFragProcessed(t, e) {
          const {
              frag: s,
              success: i
          } = e;
          if (this.fragPrevious = s, this.state = b.IDLE, !i) return;
          const r = this.tracksBuffered[this.currentTrackId];
          if (!r) return;
          let n;
          const o = s.start;
          for (let c = 0; c < r.length; c++)
              if (o >= r[c].start && o <= r[c].end) {
                  n = r[c];
                  break
              } const l = s.start + s.duration;
          n ? n.end = l : (n = {
              start: o,
              end: l
          }, r.push(n)), this.fragmentTracker.fragBuffered(s)
      }
      onBufferFlushing(t, e) {
          const {
              startOffset: s,
              endOffset: i
          } = e;
          if (s === 0 && i !== Number.POSITIVE_INFINITY) {
              const r = i - 1;
              if (r <= 0) return;
              e.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach(n => {
                  for (let o = 0; o < n.length;) {
                      if (n[o].end <= r) {
                          n.shift();
                          continue
                      } else if (n[o].start < r) n[o].start = r;
                      else break;
                      o++
                  }
              }), this.fragmentTracker.removeFragmentsInRange(s, r, U.SUBTITLE)
          }
      }
      onFragBuffered(t, e) {
          if (!this.loadedmetadata && e.frag.type === U.MAIN) {
              var s;
              (s = this.media) != null && s.buffered.length && (this.loadedmetadata = !0)
          }
      }
      onError(t, e) {
          const s = e.frag;
          (s == null ? void 0 : s.type) === U.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== b.STOPPED && (this.state = b.IDLE))
      }
      onSubtitleTracksUpdated(t, {
          subtitleTracks: e
      }) {
          if (Wi(this.levels, e)) {
              this.levels = e.map(s => new Wt(s));
              return
          }
          this.tracksBuffered = [], this.levels = e.map(s => {
              const i = new Wt(s);
              return this.tracksBuffered[i.id] = [], i
          }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, U.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null
      }
      onSubtitleTrackSwitch(t, e) {
          if (this.currentTrackId = e.id, !this.levels.length || this.currentTrackId === -1) {
              this.clearInterval();
              return
          }
          const s = this.levels[this.currentTrackId];
          s != null && s.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, s && this.setInterval(Vs)
      }
      onSubtitleTrackLoaded(t, e) {
          var s;
          const {
              details: i,
              id: r
          } = e, {
              currentTrackId: n,
              levels: o
          } = this;
          if (!o.length) return;
          const l = o[n];
          if (r >= o.length || r !== n || !l) return;
          this.mediaBuffer = this.mediaBufferTimeRanges;
          let c = 0;
          if (i.live || (s = l.details) != null && s.live) {
              const h = this.mainDetails;
              if (i.deltaUpdateFailed || !h) return;
              const u = h.fragments[0];
              l.details ? (c = this.alignPlaylists(i, l.details), c === 0 && u && (c = u.start, Ke(i, c))) : i.hasProgramDateTime && h.hasProgramDateTime ? (Di(i, h), c = i.fragments[0].start) : u && (c = u.start, Ke(i, c))
          }
          l.details = i, this.levelLastLoaded = r, !this.startFragRequested && (this.mainDetails || !i.live) && this.setStartPosition(l.details, c), this.tick(), i.live && !this.fragCurrent && this.media && this.state === b.IDLE && (Yt(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0))
      }
      _handleFragmentLoadComplete(t) {
          const {
              frag: e,
              payload: s
          } = t, i = e.decryptdata, r = this.hls;
          if (!this.fragContextChanged(e) && s && s.byteLength > 0 && i && i.key && i.iv && i.method === "AES-128") {
              const n = performance.now();
              this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer).catch(o => {
                  throw r.trigger(m.ERROR, {
                      type: N.MEDIA_ERROR,
                      details: L.FRAG_DECRYPT_ERROR,
                      fatal: !1,
                      error: o,
                      reason: o.message,
                      frag: e
                  }), o
              }).then(o => {
                  const l = performance.now();
                  r.trigger(m.FRAG_DECRYPTED, {
                      frag: e,
                      payload: o,
                      stats: {
                          tstart: n,
                          tdecrypt: l
                      }
                  })
              }).catch(o => {
                  this.warn(`${o.name}: ${o.message}`), this.state = b.IDLE
              })
          }
      }
      doTick() {
          if (!this.media) {
              this.state = b.IDLE;
              return
          }
          if (this.state === b.IDLE) {
              const {
                  currentTrackId: t,
                  levels: e
              } = this, s = e[t];
              if (!e.length || !s || !s.details) return;
              const {
                  config: i
              } = this, r = this.getLoadPosition(), n = q.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
                  end: o,
                  len: l
              } = n, c = this.getFwdBufferInfo(this.media, U.MAIN), h = s.details, u = this.getMaxBufferLength(c == null ? void 0 : c.len) + h.levelTargetDuration;
              if (l > u) return;
              const d = h.fragments,
                  f = d.length,
                  g = h.edge;
              let p = null;
              const T = this.fragPrevious;
              if (o < g) {
                  const y = i.maxFragLookUpTolerance,
                      S = o > g - y ? 0 : y;
                  p = Yt(T, d, Math.max(d[0].start, o), S), !p && T && T.start < d[0].start && (p = d[0])
              } else p = d[f - 1];
              if (!p) return;
              if (p = this.mapToInitFragWhenRequired(p), p.sn !== "initSegment") {
                  const y = p.sn - h.startSN,
                      S = d[y - 1];
                  S && S.cc === p.cc && this.fragmentTracker.getState(S) === et.NOT_LOADED && (p = S)
              }
              this.fragmentTracker.getState(p) === et.NOT_LOADED && this.loadFragment(p, s, o)
          }
      }
      getMaxBufferLength(t) {
          const e = super.getMaxBufferLength();
          return t ? Math.max(e, t) : e
      }
      loadFragment(t, e, s) {
          this.fragCurrent = t, t.sn === "initSegment" ? this._loadInitSegment(t, e) : (this.startFragRequested = !0, super.loadFragment(t, e, s))
      }
      get mediaBufferTimeRanges() {
          return new Fa(this.tracksBuffered[this.currentTrackId] || [])
      }
  }
  class Fa {
      constructor(t) {
          this.buffered = void 0;
          const e = (s, i, r) => {
              if (i = i >>> 0, i > r - 1) throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
              return t[i][s]
          };
          this.buffered = {
              get length() {
                  return t.length
              },
              end(s) {
                  return e("end", s, t.length)
              },
              start(s) {
                  return e("start", s, t.length)
              }
          }
      }
  }
  class Oa extends Qe {
      constructor(t) {
          super(t, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.trackChangeListener = () => this.onTextTracksChanged(), this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.registerListeners()
      }
      destroy() {
          this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, super.destroy()
      }
      get subtitleDisplay() {
          return this._subtitleDisplay
      }
      set subtitleDisplay(t) {
          this._subtitleDisplay = t, this.trackId > -1 && this.toggleTrackModes(this.trackId)
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.LEVEL_LOADING, this.onLevelLoading, this), t.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(m.ERROR, this.onError, this)
      }
      unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.LEVEL_LOADING, this.onLevelLoading, this), t.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(m.ERROR, this.onError, this)
      }
      onMediaAttached(t, e) {
          this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
      }
      pollTrackChange(t) {
          self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
      }
      onMediaDetaching() {
          if (!this.media) return;
          self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), Ce(this.media.textTracks).forEach(e => {
              Nt(e)
          }), this.subtitleTrack = -1, this.media = null
      }
      onManifestLoading() {
          this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
      }
      onManifestParsed(t, e) {
          this.tracks = e.subtitleTracks
      }
      onSubtitleTrackLoaded(t, e) {
          const {
              id: s,
              details: i
          } = e, {
              trackId: r
          } = this, n = this.tracksInGroup[r];
          if (!n) {
              this.warn(`Invalid subtitle track id ${s}`);
              return
          }
          const o = n.details;
          n.details = e.details, this.log(`subtitle track ${s} loaded [${i.startSN}-${i.endSN}]`), s === this.trackId && this.playlistLoaded(s, e, o)
      }
      onLevelLoading(t, e) {
          this.switchLevel(e.level)
      }
      onLevelSwitching(t, e) {
          this.switchLevel(e.level)
      }
      switchLevel(t) {
          const e = this.hls.levels[t];
          if (!(e != null && e.textGroupIds)) return;
          const s = e.textGroupIds[e.urlId],
              i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
          if (this.groupId !== s) {
              const r = this.tracks.filter(l => !s || l.groupId === s);
              this.tracksInGroup = r;
              const n = this.findTrackId(i == null ? void 0 : i.name) || this.findTrackId();
              this.groupId = s || null;
              const o = {
                  subtitleTracks: r
              };
              this.log(`Updating subtitle tracks, ${r.length} track(s) found in "${s}" group-id`), this.hls.trigger(m.SUBTITLE_TRACKS_UPDATED, o), n !== -1 && this.setSubtitleTrack(n, i)
          } else this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i)
      }
      findTrackId(t) {
          const e = this.tracksInGroup;
          for (let s = 0; s < e.length; s++) {
              const i = e[s];
              if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
          }
          return -1
      }
      onError(t, e) {
          e.fatal || !e.context || e.context.type === G.SUBTITLE_TRACK && e.context.id === this.trackId && e.context.groupId === this.groupId && this.checkRetry(e)
      }
      get subtitleTracks() {
          return this.tracksInGroup
      }
      get subtitleTrack() {
          return this.trackId
      }
      set subtitleTrack(t) {
          this.selectDefaultTrack = !1;
          const e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
          this.setSubtitleTrack(t, e)
      }
      loadPlaylist(t) {
          super.loadPlaylist();
          const e = this.tracksInGroup[this.trackId];
          if (this.shouldLoadPlaylist(e)) {
              const s = e.id,
                  i = e.groupId;
              let r = e.url;
              if (t) try {
                  r = t.addDirectives(r)
              } catch (n) {
                  this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`)
              }
              this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(m.SUBTITLE_TRACK_LOADING, {
                  url: r,
                  id: s,
                  groupId: i,
                  deliveryDirectives: t || null
              })
          }
      }
      toggleTrackModes(t) {
          const {
              media: e,
              trackId: s
          } = this;
          if (!e) return;
          const i = Ce(e.textTracks),
              r = i.filter(o => o.groupId === this.groupId);
          if (t === -1)[].slice.call(i).forEach(o => {
              o.mode = "disabled"
          });
          else {
              const o = r[s];
              o && (o.mode = "disabled")
          }
          const n = r[t];
          n && (n.mode = this.subtitleDisplay ? "showing" : "hidden")
      }
      setSubtitleTrack(t, e) {
          var s;
          const i = this.tracksInGroup;
          if (!this.media) {
              this.queuedDefaultTrack = t;
              return
          }
          if (this.trackId !== t && this.toggleTrackModes(t), this.trackId === t && (t === -1 || (s = i[t]) != null && s.details) || t < -1 || t >= i.length) return;
          this.clearTimer();
          const r = i[t];
          if (this.log(`Switching to subtitle-track ${t}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : "")), this.trackId = t, r) {
              const {
                  id: n,
                  groupId: o = "",
                  name: l,
                  type: c,
                  url: h
              } = r;
              this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
                  id: n,
                  groupId: o,
                  name: l,
                  type: c,
                  url: h
              });
              const u = this.switchParams(r.url, e == null ? void 0 : e.details);
              this.loadPlaylist(u)
          } else this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
              id: t
          })
      }
      onTextTracksChanged() {
          if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively) return;
          let t = -1;
          const e = Ce(this.media.textTracks);
          for (let s = 0; s < e.length; s++)
              if (e[s].mode === "hidden") t = s;
              else if (e[s].mode === "showing") {
              t = s;
              break
          }
          this.subtitleTrack !== t && (this.subtitleTrack = t)
      }
  }
  
  function Ce(a) {
      const t = [];
      for (let e = 0; e < a.length; e++) {
          const s = a[e];
          (s.kind === "subtitles" || s.kind === "captions") && s.label && t.push(a[e])
      }
      return t
  }
  class Ma {
      constructor(t) {
          this.buffers = void 0, this.queues = {
              video: [],
              audio: [],
              audiovideo: []
          }, this.buffers = t
      }
      append(t, e) {
          const s = this.queues[e];
          s.push(t), s.length === 1 && this.buffers[e] && this.executeNext(e)
      }
      insertAbort(t, e) {
          this.queues[e].unshift(t), this.executeNext(e)
      }
      appendBlocker(t) {
          let e;
          const s = new Promise(r => {
                  e = r
              }),
              i = {
                  execute: e,
                  onStart: () => {},
                  onComplete: () => {},
                  onError: () => {}
              };
          return this.append(i, t), s
      }
      executeNext(t) {
          const {
              buffers: e,
              queues: s
          } = this, i = e[t], r = s[t];
          if (r.length) {
              const n = r[0];
              try {
                  n.execute()
              } catch (o) {
                  x.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), n.onError(o), i != null && i.updating || (r.shift(), this.executeNext(t))
              }
          }
      }
      shiftAndExecuteNext(t) {
          this.queues[t].shift(), this.executeNext(t)
      }
      current(t) {
          return this.queues[t][0]
      }
  }
  const Ws = de(),
      Ys = /([ha]vc.)(?:\.[^.,]+)+/;
  class Na {
      constructor(t) {
          this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = () => {
              const {
                  media: e,
                  mediaSource: s
              } = this;
              x.log("[buffer-controller]: Media source opened"), e && (e.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(m.MEDIA_ATTACHED, {
                  media: e
              })), s && s.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks()
          }, this._onMediaSourceClose = () => {
              x.log("[buffer-controller]: Media source closed")
          }, this._onMediaSourceEnded = () => {
              x.log("[buffer-controller]: Media source ended")
          }, this._onMediaEmptied = () => {
              const {
                  media: e,
                  _objectUrl: s
              } = this;
              e && e.src !== s && x.error(`Media element src was set while attaching MediaSource (${s} > ${e.src})`)
          }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
      }
      hasSourceTypes() {
          return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
      }
      destroy() {
          this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.BUFFER_RESET, this.onBufferReset, this), t.on(m.BUFFER_APPENDING, this.onBufferAppending, this), t.on(m.BUFFER_CODECS, this.onBufferCodecs, this), t.on(m.BUFFER_EOS, this.onBufferEos, this), t.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(m.FRAG_PARSED, this.onFragParsed, this), t.on(m.FRAG_CHANGED, this.onFragChanged, this)
      }
      unregisterListeners() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.BUFFER_RESET, this.onBufferReset, this), t.off(m.BUFFER_APPENDING, this.onBufferAppending, this), t.off(m.BUFFER_CODECS, this.onBufferCodecs, this), t.off(m.BUFFER_EOS, this.onBufferEos, this), t.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(m.FRAG_PARSED, this.onFragParsed, this), t.off(m.FRAG_CHANGED, this.onFragChanged, this)
      }
      _initSourceBuffer() {
          this.sourceBuffer = {}, this.operationQueue = new Ma(this.sourceBuffer), this.listeners = {
              audio: [],
              video: [],
              audiovideo: []
          }, this.lastMpegAudioChunk = null
      }
      onManifestLoading() {
          this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null
      }
      onManifestParsed(t, e) {
          let s = 2;
          (e.audio && !e.video || !e.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, x.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)
      }
      onMediaAttaching(t, e) {
          const s = this.media = e.media;
          if (s && Ws) {
              const i = this.mediaSource = new Ws;
              i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), s.src = self.URL.createObjectURL(i), this._objectUrl = s.src, s.addEventListener("emptied", this._onMediaEmptied)
          }
      }
      onMediaDetaching() {
          const {
              media: t,
              mediaSource: e,
              _objectUrl: s
          } = this;
          if (e) {
              if (x.log("[buffer-controller]: media source detaching"), e.readyState === "open") try {
                  e.endOfStream()
              } catch (i) {
                  x.warn(`[buffer-controller]: onMediaDetaching: ${i.message} while calling endOfStream`)
              }
              this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (t.removeEventListener("emptied", this._onMediaEmptied), s && self.URL.revokeObjectURL(s), t.src === s ? (t.removeAttribute("src"), t.load()) : x.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
          }
          this.hls.trigger(m.MEDIA_DETACHED, void 0)
      }
      onBufferReset() {
          this.getSourceBufferTypes().forEach(t => {
              const e = this.sourceBuffer[t];
              try {
                  e && (this.removeBufferListeners(t), this.mediaSource && this.mediaSource.removeSourceBuffer(e), this.sourceBuffer[t] = void 0)
              } catch (s) {
                  x.warn(`[buffer-controller]: Failed to reset the ${t} buffer`, s)
              }
          }), this._initSourceBuffer()
      }
      onBufferCodecs(t, e) {
          const s = this.getSourceBufferTypes().length;
          Object.keys(e).forEach(i => {
              if (s) {
                  const r = this.tracks[i];
                  if (r && typeof r.buffer.changeType == "function") {
                      const {
                          id: n,
                          codec: o,
                          levelCodec: l,
                          container: c,
                          metadata: h
                      } = e[i], u = (r.levelCodec || r.codec).replace(Ys, "$1"), d = (l || o).replace(Ys, "$1");
                      if (u !== d) {
                          const f = `${c};codecs=${l||o}`;
                          this.appendChangeType(i, f), x.log(`[buffer-controller]: switching codec ${u} to ${d}`), this.tracks[i] = {
                              buffer: r.buffer,
                              codec: o,
                              container: c,
                              levelCodec: l,
                              metadata: h,
                              id: n
                          }
                      }
                  }
              } else this.pendingTracks[i] = e[i]
          }), !s && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks())
      }
      appendChangeType(t, e) {
          const {
              operationQueue: s
          } = this, i = {
              execute: () => {
                  const r = this.sourceBuffer[t];
                  r && (x.log(`[buffer-controller]: changing ${t} sourceBuffer type to ${e}`), r.changeType(e)), s.shiftAndExecuteNext(t)
              },
              onStart: () => {},
              onComplete: () => {},
              onError: r => {
                  x.warn(`[buffer-controller]: Failed to change ${t} SourceBuffer type`, r)
              }
          };
          s.append(i, t)
      }
      onBufferAppending(t, e) {
          const {
              hls: s,
              operationQueue: i,
              tracks: r
          } = this, {
              data: n,
              type: o,
              frag: l,
              part: c,
              chunkMeta: h
          } = e, u = h.buffering[o], d = self.performance.now();
          u.start = d;
          const f = l.stats.buffering,
              g = c ? c.stats.buffering : null;
          f.start === 0 && (f.start = d), g && g.start === 0 && (g.start = d);
          const p = r.audio;
          let T = !1;
          o === "audio" && (p == null ? void 0 : p.container) === "audio/mpeg" && (T = !this.lastMpegAudioChunk || h.id === 1 || this.lastMpegAudioChunk.sn !== h.sn, this.lastMpegAudioChunk = h);
          const y = l.start,
              S = {
                  execute: () => {
                      if (u.executeStart = self.performance.now(), T) {
                          const E = this.sourceBuffer[o];
                          if (E) {
                              const R = y - E.timestampOffset;
                              Math.abs(R) >= .1 && (x.log(`[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${y} (delta: ${R}) sn: ${l.sn})`), E.timestampOffset = y)
                          }
                      }
                      this.appendExecutor(n, o)
                  },
                  onStart: () => {},
                  onComplete: () => {
                      const E = self.performance.now();
                      u.executeEnd = u.end = E, f.first === 0 && (f.first = E), g && g.first === 0 && (g.first = E);
                      const {
                          sourceBuffer: R
                      } = this, A = {};
                      for (const _ in R) A[_] = q.getBuffered(R[_]);
                      this.appendError = 0, this.hls.trigger(m.BUFFER_APPENDED, {
                          type: o,
                          frag: l,
                          part: c,
                          chunkMeta: h,
                          parent: l.type,
                          timeRanges: A
                      })
                  },
                  onError: E => {
                      x.error(`[buffer-controller]: Error encountered while trying to append to the ${o} SourceBuffer`, E);
                      const R = {
                          type: N.MEDIA_ERROR,
                          parent: l.type,
                          details: L.BUFFER_APPEND_ERROR,
                          frag: l,
                          part: c,
                          chunkMeta: h,
                          error: E,
                          err: E,
                          fatal: !1
                      };
                      E.code === DOMException.QUOTA_EXCEEDED_ERR ? R.details = L.BUFFER_FULL_ERROR : (this.appendError++, R.details = L.BUFFER_APPEND_ERROR, this.appendError > s.config.appendErrorMaxRetry && (x.error(`[buffer-controller]: Failed ${s.config.appendErrorMaxRetry} times to append segment in sourceBuffer`), R.fatal = !0)), s.trigger(m.ERROR, R)
                  }
              };
          i.append(S, o)
      }
      onBufferFlushing(t, e) {
          const {
              operationQueue: s
          } = this, i = r => ({
              execute: this.removeExecutor.bind(this, r, e.startOffset, e.endOffset),
              onStart: () => {},
              onComplete: () => {
                  this.hls.trigger(m.BUFFER_FLUSHED, {
                      type: r
                  })
              },
              onError: n => {
                  x.warn(`[buffer-controller]: Failed to remove from ${r} SourceBuffer`, n)
              }
          });
          e.type ? s.append(i(e.type), e.type) : this.getSourceBufferTypes().forEach(r => {
              s.append(i(r), r)
          })
      }
      onFragParsed(t, e) {
          const {
              frag: s,
              part: i
          } = e, r = [], n = i ? i.elementaryStreams : s.elementaryStreams;
          n[H.AUDIOVIDEO] ? r.push("audiovideo") : (n[H.AUDIO] && r.push("audio"), n[H.VIDEO] && r.push("video"));
          const o = () => {
              const l = self.performance.now();
              s.stats.buffering.end = l, i && (i.stats.buffering.end = l);
              const c = i ? i.stats : s.stats;
              this.hls.trigger(m.FRAG_BUFFERED, {
                  frag: s,
                  part: i,
                  stats: c,
                  id: s.type
              })
          };
          r.length === 0 && x.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r)
      }
      onFragChanged(t, e) {
          this.flushBackBuffer()
      }
      onBufferEos(t, e) {
          this.getSourceBufferTypes().reduce((i, r) => {
              const n = this.sourceBuffer[r];
              return n && (!e.type || e.type === r) && (n.ending = !0, n.ended || (n.ended = !0, x.log(`[buffer-controller]: ${r} sourceBuffer now EOS`))), i && !!(!n || n.ended)
          }, !0) && (x.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
              this.getSourceBufferTypes().forEach(r => {
                  const n = this.sourceBuffer[r];
                  n && (n.ending = !1)
              });
              const {
                  mediaSource: i
              } = this;
              if (!i || i.readyState !== "open") {
                  i && x.info(`[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);
                  return
              }
              x.log("[buffer-controller]: Calling mediaSource.endOfStream()"), i.endOfStream()
          }))
      }
      onLevelUpdated(t, {
          details: e
      }) {
          e.fragments.length && (this.details = e, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
      }
      flushBackBuffer() {
          const {
              hls: t,
              details: e,
              media: s,
              sourceBuffer: i
          } = this;
          if (!s || e === null) return;
          const r = this.getSourceBufferTypes();
          if (!r.length) return;
          const n = e.live && t.config.liveBackBufferLength !== null ? t.config.liveBackBufferLength : t.config.backBufferLength;
          if (!F(n) || n < 0) return;
          const o = s.currentTime,
              l = e.levelTargetDuration,
              c = Math.max(n, l),
              h = Math.floor(o / l) * l - c;
          r.forEach(u => {
              const d = i[u];
              if (d) {
                  const f = q.getBuffered(d);
                  if (f.length > 0 && h > f.start(0)) {
                      if (t.trigger(m.BACK_BUFFER_REACHED, {
                              bufferEnd: h
                          }), e.live) t.trigger(m.LIVE_BACK_BUFFER_REACHED, {
                          bufferEnd: h
                      });
                      else if (d.ended && f.end(f.length - 1) - o < l * 2) {
                          x.info(`[buffer-controller]: Cannot flush ${u} back buffer while SourceBuffer is in ended state`);
                          return
                      }
                      t.trigger(m.BUFFER_FLUSHING, {
                          startOffset: 0,
                          endOffset: h,
                          type: u
                      })
                  }
              }
          })
      }
      updateMediaElementDuration() {
          if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open") return;
          const {
              details: t,
              hls: e,
              media: s,
              mediaSource: i
          } = this, r = t.fragments[0].start + t.totalduration, n = s.duration, o = F(i.duration) ? i.duration : 0;
          t.live && e.config.liveDurationInfinity ? (x.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(t)) : (r > o && r > n || !F(n)) && (x.log(`[buffer-controller]: Updating Media Source duration to ${r.toFixed(3)}`), i.duration = r)
      }
      updateSeekableRange(t) {
          const e = this.mediaSource,
              s = t.fragments;
          if (s.length && t.live && e != null && e.setLiveSeekableRange) {
              const r = Math.max(0, s[0].start),
                  n = Math.max(r, r + t.totalduration);
              e.setLiveSeekableRange(r, n)
          }
      }
      checkPendingTracks() {
          const {
              bufferCodecEventsExpected: t,
              operationQueue: e,
              pendingTracks: s
          } = this, i = Object.keys(s).length;
          if (i && !t || i === 2) {
              this.createSourceBuffers(s), this.pendingTracks = {};
              const r = this.getSourceBufferTypes();
              if (r.length) this.hls.trigger(m.BUFFER_CREATED, {
                  tracks: this.tracks
              }), r.forEach(n => {
                  e.executeNext(n)
              });
              else {
                  const n = new Error("could not create source buffer for media codec(s)");
                  this.hls.trigger(m.ERROR, {
                      type: N.MEDIA_ERROR,
                      details: L.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                      fatal: !0,
                      error: n,
                      reason: n.message
                  })
              }
          }
      }
      createSourceBuffers(t) {
          const {
              sourceBuffer: e,
              mediaSource: s
          } = this;
          if (!s) throw Error("createSourceBuffers called when mediaSource was null");
          for (const i in t)
              if (!e[i]) {
                  const r = t[i];
                  if (!r) throw Error(`source buffer exists for track ${i}, however track does not`);
                  const n = r.levelCodec || r.codec,
                      o = `${r.container};codecs=${n}`;
                  x.log(`[buffer-controller]: creating sourceBuffer(${o})`);
                  try {
                      const l = e[i] = s.addSourceBuffer(o),
                          c = i;
                      this.addBufferListener(c, "updatestart", this._onSBUpdateStart), this.addBufferListener(c, "updateend", this._onSBUpdateEnd), this.addBufferListener(c, "error", this._onSBUpdateError), this.tracks[i] = {
                          buffer: l,
                          codec: n,
                          container: r.container,
                          levelCodec: r.levelCodec,
                          metadata: r.metadata,
                          id: r.id
                      }
                  } catch (l) {
                      x.error(`[buffer-controller]: error while trying to add sourceBuffer: ${l.message}`), this.hls.trigger(m.ERROR, {
                          type: N.MEDIA_ERROR,
                          details: L.BUFFER_ADD_CODEC_ERROR,
                          fatal: !1,
                          error: l,
                          mimeType: o
                      })
                  }
              }
      }
      _onSBUpdateStart(t) {
          const {
              operationQueue: e
          } = this;
          e.current(t).onStart()
      }
      _onSBUpdateEnd(t) {
          const {
              operationQueue: e
          } = this;
          e.current(t).onComplete(), e.shiftAndExecuteNext(t)
      }
      _onSBUpdateError(t, e) {
          const s = new Error(`${t} SourceBuffer error`);
          x.error(`[buffer-controller]: ${s}`, e), this.hls.trigger(m.ERROR, {
              type: N.MEDIA_ERROR,
              details: L.BUFFER_APPENDING_ERROR,
              error: s,
              fatal: !1
          });
          const i = this.operationQueue.current(t);
          i && i.onError(e)
      }
      removeExecutor(t, e, s) {
          const {
              media: i,
              mediaSource: r,
              operationQueue: n,
              sourceBuffer: o
          } = this, l = o[t];
          if (!i || !r || !l) {
              x.warn(`[buffer-controller]: Attempting to remove from the ${t} SourceBuffer, but it does not exist`), n.shiftAndExecuteNext(t);
              return
          }
          const c = F(i.duration) ? i.duration : 1 / 0,
              h = F(r.duration) ? r.duration : 1 / 0,
              u = Math.max(0, e),
              d = Math.min(s, c, h);
          d > u && !l.ending ? (l.ended = !1, x.log(`[buffer-controller]: Removing [${u},${d}] from the ${t} SourceBuffer`), l.remove(u, d)) : n.shiftAndExecuteNext(t)
      }
      appendExecutor(t, e) {
          const {
              operationQueue: s,
              sourceBuffer: i
          } = this, r = i[e];
          if (!r) {
              x.warn(`[buffer-controller]: Attempting to append to the ${e} SourceBuffer, but it does not exist`), s.shiftAndExecuteNext(e);
              return
          }
          r.ended = !1, r.appendBuffer(t)
      }
      blockBuffers(t, e = this.getSourceBufferTypes()) {
          if (!e.length) {
              x.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(t);
              return
          }
          const {
              operationQueue: s
          } = this, i = e.map(r => s.appendBlocker(r));
          Promise.all(i).then(() => {
              t(), e.forEach(r => {
                  const n = this.sourceBuffer[r];
                  n != null && n.updating || s.shiftAndExecuteNext(r)
              })
          })
      }
      getSourceBufferTypes() {
          return Object.keys(this.sourceBuffer)
      }
      addBufferListener(t, e, s) {
          const i = this.sourceBuffer[t];
          if (!i) return;
          const r = s.bind(this, t);
          this.listeners[t].push({
              event: e,
              listener: r
          }), i.addEventListener(e, r)
      }
      removeBufferListeners(t) {
          const e = this.sourceBuffer[t];
          e && this.listeners[t].forEach(s => {
              e.removeEventListener(s.event, s.listener)
          })
      }
  }
  const qs = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499
      },
      Yi = function(t) {
          let e = t;
          return qs.hasOwnProperty(t) && (e = qs[t]), String.fromCharCode(e)
      },
      pt = 15,
      vt = 100,
      Ua = {
          17: 1,
          18: 3,
          21: 5,
          22: 7,
          23: 9,
          16: 11,
          19: 12,
          20: 14
      },
      Ba = {
          17: 2,
          18: 4,
          21: 6,
          22: 8,
          23: 10,
          19: 13,
          20: 15
      },
      $a = {
          25: 1,
          26: 3,
          29: 5,
          30: 7,
          31: 9,
          24: 11,
          27: 12,
          28: 14
      },
      Ga = {
          25: 2,
          26: 4,
          29: 6,
          30: 8,
          31: 10,
          27: 13,
          28: 15
      },
      Ka = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
  class Ha {
      constructor() {
          this.time = null, this.verboseLevel = 0
      }
      log(t, e) {
          if (this.verboseLevel >= t) {
              const s = typeof e == "function" ? e() : e;
              x.log(`${this.time} [${t}] ${s}`)
          }
      }
  }
  const Ct = function(t) {
      const e = [];
      for (let s = 0; s < t.length; s++) e.push(t[s].toString(16));
      return e
  };
  class qi {
      constructor(t, e, s, i, r) {
          this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = s || !1, this.background = i || "black", this.flash = r || !1
      }
      reset() {
          this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
      }
      setStyles(t) {
          const e = ["foreground", "underline", "italics", "background", "flash"];
          for (let s = 0; s < e.length; s++) {
              const i = e[s];
              t.hasOwnProperty(i) && (this[i] = t[i])
          }
      }
      isDefault() {
          return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash
      }
      equals(t) {
          return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
      }
      copy(t) {
          this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
      }
      toString() {
          return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
      }
  }
  class Va {
      constructor(t, e, s, i, r, n) {
          this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new qi(e, s, i, r, n)
      }
      reset() {
          this.uchar = " ", this.penState.reset()
      }
      setChar(t, e) {
          this.uchar = t, this.penState.copy(e)
      }
      setPenState(t) {
          this.penState.copy(t)
      }
      equals(t) {
          return this.uchar === t.uchar && this.penState.equals(t.penState)
      }
      copy(t) {
          this.uchar = t.uchar, this.penState.copy(t.penState)
      }
      isEmpty() {
          return this.uchar === " " && this.penState.isDefault()
      }
  }
  class Wa {
      constructor(t) {
          this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
          for (let e = 0; e < vt; e++) this.chars.push(new Va);
          this.logger = t, this.pos = 0, this.currPenState = new qi
      }
      equals(t) {
          let e = !0;
          for (let s = 0; s < vt; s++)
              if (!this.chars[s].equals(t.chars[s])) {
                  e = !1;
                  break
              } return e
      }
      copy(t) {
          for (let e = 0; e < vt; e++) this.chars[e].copy(t.chars[e])
      }
      isEmpty() {
          let t = !0;
          for (let e = 0; e < vt; e++)
              if (!this.chars[e].isEmpty()) {
                  t = !1;
                  break
              } return t
      }
      setCursor(t) {
          this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > vt && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = vt)
      }
      moveCursor(t) {
          const e = this.pos + t;
          if (t > 1)
              for (let s = this.pos + 1; s < e + 1; s++) this.chars[s].setPenState(this.currPenState);
          this.setCursor(e)
      }
      backSpace() {
          this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
      }
      insertChar(t) {
          t >= 144 && this.backSpace();
          const e = Yi(t);
          if (this.pos >= vt) {
              this.logger.log(0, () => "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
              return
          }
          this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1)
      }
      clearFromPos(t) {
          let e;
          for (e = t; e < vt; e++) this.chars[e].reset()
      }
      clear() {
          this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
      }
      clearToEndOfRow() {
          this.clearFromPos(this.pos)
      }
      getTextString() {
          const t = [];
          let e = !0;
          for (let s = 0; s < vt; s++) {
              const i = this.chars[s].uchar;
              i !== " " && (e = !1), t.push(i)
          }
          return e ? "" : t.join("")
      }
      setPenStyles(t) {
          this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
      }
  }
  class ke {
      constructor(t) {
          this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
          for (let e = 0; e < pt; e++) this.rows.push(new Wa(t));
          this.logger = t, this.currRow = pt - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
      }
      reset() {
          for (let t = 0; t < pt; t++) this.rows[t].clear();
          this.currRow = pt - 1
      }
      equals(t) {
          let e = !0;
          for (let s = 0; s < pt; s++)
              if (!this.rows[s].equals(t.rows[s])) {
                  e = !1;
                  break
              } return e
      }
      copy(t) {
          for (let e = 0; e < pt; e++) this.rows[e].copy(t.rows[e])
      }
      isEmpty() {
          let t = !0;
          for (let e = 0; e < pt; e++)
              if (!this.rows[e].isEmpty()) {
                  t = !1;
                  break
              } return t
      }
      backSpace() {
          this.rows[this.currRow].backSpace()
      }
      clearToEndOfRow() {
          this.rows[this.currRow].clearToEndOfRow()
      }
      insertChar(t) {
          this.rows[this.currRow].insertChar(t)
      }
      setPen(t) {
          this.rows[this.currRow].setPenStyles(t)
      }
      moveCursor(t) {
          this.rows[this.currRow].moveCursor(t)
      }
      setCursor(t) {
          this.logger.log(2, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
      }
      setPAC(t) {
          this.logger.log(2, () => "pacData = " + JSON.stringify(t));
          let e = t.row - 1;
          if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
              for (let o = 0; o < pt; o++) this.rows[o].clear();
              const r = this.currRow + 1 - this.nrRollUpRows,
                  n = this.lastOutputScreen;
              if (n) {
                  const o = n.rows[r].cueStartTime,
                      l = this.logger.time;
                  if (o && l !== null && o < l)
                      for (let c = 0; c < this.nrRollUpRows; c++) this.rows[e - this.nrRollUpRows + c + 1].copy(n.rows[r + c])
              }
          }
          this.currRow = e;
          const s = this.rows[this.currRow];
          if (t.indent !== null) {
              const r = t.indent,
                  n = Math.max(r - 1, 0);
              s.setCursor(t.indent), t.color = s.chars[n].penState.foreground
          }
          const i = {
              foreground: t.color,
              underline: t.underline,
              italics: t.italics,
              background: "black",
              flash: !1
          };
          this.setPen(i)
      }
      setBkgData(t) {
          this.logger.log(2, () => "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
      }
      setRollUpRows(t) {
          this.nrRollUpRows = t
      }
      rollUp() {
          if (this.nrRollUpRows === null) {
              this.logger.log(3, "roll_up but nrRollUpRows not set yet");
              return
          }
          this.logger.log(1, () => this.getDisplayText());
          const t = this.currRow + 1 - this.nrRollUpRows,
              e = this.rows.splice(t, 1)[0];
          e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(2, "Rolling up")
      }
      getDisplayText(t) {
          t = t || !1;
          const e = [];
          let s = "",
              i = -1;
          for (let r = 0; r < pt; r++) {
              const n = this.rows[r].getTextString();
              n && (i = r + 1, t ? e.push("Row " + i + ": '" + n + "'") : e.push(n.trim()))
          }
          return e.length > 0 && (t ? s = "[" + e.join(" | ") + "]" : s = e.join(`
  `)), s
      }
      getTextAndFormat() {
          return this.rows
      }
  }
  class js {
      constructor(t, e, s) {
          this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new ke(s), this.nonDisplayedMemory = new ke(s), this.lastOutputScreen = new ke(s), this.currRollUpRow = this.displayedMemory.rows[pt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s
      }
      reset() {
          this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[pt - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
      }
      getHandler() {
          return this.outputFilter
      }
      setHandler(t) {
          this.outputFilter = t
      }
      setPAC(t) {
          this.writeScreen.setPAC(t)
      }
      setBkgData(t) {
          this.writeScreen.setBkgData(t)
      }
      setMode(t) {
          t !== this.mode && (this.mode = t, this.logger.log(2, () => "MODE=" + t), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
      }
      insertChars(t) {
          for (let s = 0; s < t.length; s++) this.writeScreen.insertChar(t[s]);
          const e = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
          this.logger.log(2, () => e + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
      }
      ccRCL() {
          this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
      }
      ccBS() {
          this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
      }
      ccAOF() {}
      ccAON() {}
      ccDER() {
          this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
      }
      ccRU(t) {
          this.logger.log(2, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
      }
      ccFON() {
          this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
              flash: !0
          })
      }
      ccRDC() {
          this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
      }
      ccTR() {
          this.logger.log(2, "TR"), this.setMode("MODE_TEXT")
      }
      ccRTD() {
          this.logger.log(2, "RTD"), this.setMode("MODE_TEXT")
      }
      ccEDM() {
          this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
      }
      ccCR() {
          this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
      }
      ccENM() {
          this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
      }
      ccEOC() {
          if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
              const t = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText())
          }
          this.outputDataUpdate(!0)
      }
      ccTO(t) {
          this.logger.log(2, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
      }
      ccMIDROW(t) {
          const e = {
              flash: !1
          };
          if (e.underline = t % 2 === 1, e.italics = t >= 46, e.italics) e.foreground = "white";
          else {
              const s = Math.floor(t / 2) - 16,
                  i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
              e.foreground = i[s]
          }
          this.logger.log(2, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
      }
      outputDataUpdate(t = !1) {
          const e = this.logger.time;
          e !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = e : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e), this.lastOutputScreen.copy(this.displayedMemory))
      }
      cueSplitAtTime(t) {
          this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
      }
  }
  class Xs {
      constructor(t, e, s) {
          this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
          const i = new Ha;
          this.channels = [null, new js(t, e, i), new js(t + 1, s, i)], this.cmdHistory = Qs(), this.logger = i
      }
      getHandler(t) {
          return this.channels[t].getHandler()
      }
      setHandler(t, e) {
          this.channels[t].setHandler(e)
      }
      addData(t, e) {
          let s, i, r, n = !1;
          this.logger.time = t;
          for (let o = 0; o < e.length; o += 2)
              if (i = e[o] & 127, r = e[o + 1] & 127, !(i === 0 && r === 0)) {
                  if (this.logger.log(3, "[" + Ct([e[o], e[o + 1]]) + "] -> (" + Ct([i, r]) + ")"), s = this.parseCmd(i, r), s || (s = this.parseMidrow(i, r)), s || (s = this.parsePAC(i, r)), s || (s = this.parseBackgroundAttributes(i, r)), !s && (n = this.parseChars(i, r), n)) {
                      const l = this.currentChannel;
                      l && l > 0 ? this.channels[l].insertChars(n) : this.logger.log(2, "No channel found yet. TEXT-MODE?")
                  }!s && !n && this.logger.log(2, "Couldn't parse cleaned data " + Ct([i, r]) + " orig: " + Ct([e[o], e[o + 1]]))
              }
      }
      parseCmd(t, e) {
          const {
              cmdHistory: s
          } = this, i = (t === 20 || t === 28 || t === 21 || t === 29) && e >= 32 && e <= 47, r = (t === 23 || t === 31) && e >= 33 && e <= 35;
          if (!(i || r)) return !1;
          if (zs(t, e, s)) return Mt(null, null, s), this.logger.log(3, "Repeated command (" + Ct([t, e]) + ") is dropped"), !0;
          const n = t === 20 || t === 21 || t === 23 ? 1 : 2,
              o = this.channels[n];
          return t === 20 || t === 21 || t === 28 || t === 29 ? e === 32 ? o.ccRCL() : e === 33 ? o.ccBS() : e === 34 ? o.ccAOF() : e === 35 ? o.ccAON() : e === 36 ? o.ccDER() : e === 37 ? o.ccRU(2) : e === 38 ? o.ccRU(3) : e === 39 ? o.ccRU(4) : e === 40 ? o.ccFON() : e === 41 ? o.ccRDC() : e === 42 ? o.ccTR() : e === 43 ? o.ccRTD() : e === 44 ? o.ccEDM() : e === 45 ? o.ccCR() : e === 46 ? o.ccENM() : e === 47 && o.ccEOC() : o.ccTO(e - 32), Mt(t, e, s), this.currentChannel = n, !0
      }
      parseMidrow(t, e) {
          let s = 0;
          if ((t === 17 || t === 25) && e >= 32 && e <= 47) {
              if (t === 17 ? s = 1 : s = 2, s !== this.currentChannel) return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
              const i = this.channels[s];
              return i ? (i.ccMIDROW(e), this.logger.log(3, "MIDROW (" + Ct([t, e]) + ")"), !0) : !1
          }
          return !1
      }
      parsePAC(t, e) {
          let s;
          const i = this.cmdHistory,
              r = (t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127,
              n = (t === 16 || t === 24) && e >= 64 && e <= 95;
          if (!(r || n)) return !1;
          if (zs(t, e, i)) return Mt(null, null, i), !0;
          const o = t <= 23 ? 1 : 2;
          e >= 64 && e <= 95 ? s = o === 1 ? Ua[t] : $a[t] : s = o === 1 ? Ba[t] : Ga[t];
          const l = this.channels[o];
          return l ? (l.setPAC(this.interpretPAC(s, e)), Mt(t, e, i), this.currentChannel = o, !0) : !1
      }
      interpretPAC(t, e) {
          let s;
          const i = {
              color: null,
              italics: !1,
              indent: null,
              underline: !1,
              row: t
          };
          return e > 95 ? s = e - 96 : s = e - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i
      }
      parseChars(t, e) {
          let s, i = null,
              r = null;
          if (t >= 25 ? (s = 2, r = t - 8) : (s = 1, r = t), r >= 17 && r <= 19) {
              let n;
              r === 17 ? n = e + 80 : r === 18 ? n = e + 112 : n = e + 144, this.logger.log(2, "Special char '" + Yi(n) + "' in channel " + s), i = [n]
          } else t >= 32 && t <= 127 && (i = e === 0 ? [t] : [t, e]);
          if (i) {
              const n = Ct(i);
              this.logger.log(3, "Char codes =  " + n.join(",")), Mt(t, e, this.cmdHistory)
          }
          return i
      }
      parseBackgroundAttributes(t, e) {
          const s = (t === 16 || t === 24) && e >= 32 && e <= 47,
              i = (t === 23 || t === 31) && e >= 45 && e <= 47;
          if (!(s || i)) return !1;
          let r;
          const n = {};
          t === 16 || t === 24 ? (r = Math.floor((e - 32) / 2), n.background = Ka[r], e % 2 === 1 && (n.background = n.background + "_semi")) : e === 45 ? n.background = "transparent" : (n.foreground = "black", e === 47 && (n.underline = !0));
          const o = t <= 23 ? 1 : 2;
          return this.channels[o].setBkgData(n), Mt(t, e, this.cmdHistory), !0
      }
      reset() {
          for (let t = 0; t < Object.keys(this.channels).length; t++) {
              const e = this.channels[t];
              e && e.reset()
          }
          this.cmdHistory = Qs()
      }
      cueSplitAtTime(t) {
          for (let e = 0; e < this.channels.length; e++) {
              const s = this.channels[e];
              s && s.cueSplitAtTime(t)
          }
      }
  }
  
  function Mt(a, t, e) {
      e.a = a, e.b = t
  }
  
  function zs(a, t, e) {
      return e.a === a && e.b === t
  }
  
  function Qs() {
      return {
          a: null,
          b: null
      }
  }
  class te {
      constructor(t, e) {
          this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
      }
      dispatchCue() {
          this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
      }
      newCue(t, e, s) {
          (this.startTime === null || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName)
      }
      reset() {
          this.cueRanges = [], this.startTime = null
      }
  }
  var as = function() {
      if (typeof self < "u" && self.VTTCue) return self.VTTCue;
      const a = ["", "lr", "rl"],
          t = ["start", "middle", "end", "left", "right"];
  
      function e(o, l) {
          if (typeof l != "string" || !Array.isArray(o)) return !1;
          const c = l.toLowerCase();
          return ~o.indexOf(c) ? c : !1
      }
  
      function s(o) {
          return e(a, o)
      }
  
      function i(o) {
          return e(t, o)
      }
  
      function r(o, ...l) {
          let c = 1;
          for (; c < arguments.length; c++) {
              const h = arguments[c];
              for (const u in h) o[u] = h[u]
          }
          return o
      }
  
      function n(o, l, c) {
          const h = this,
              u = {
                  enumerable: !0
              };
          h.hasBeenReset = !1;
          let d = "",
              f = !1,
              g = o,
              p = l,
              T = c,
              y = null,
              S = "",
              E = !0,
              R = "auto",
              A = "start",
              _ = 50,
              D = "middle",
              C = 50,
              k = "middle";
          Object.defineProperty(h, "id", r({}, u, {
              get: function() {
                  return d
              },
              set: function(I) {
                  d = "" + I
              }
          })), Object.defineProperty(h, "pauseOnExit", r({}, u, {
              get: function() {
                  return f
              },
              set: function(I) {
                  f = !!I
              }
          })), Object.defineProperty(h, "startTime", r({}, u, {
              get: function() {
                  return g
              },
              set: function(I) {
                  if (typeof I != "number") throw new TypeError("Start time must be set to a number.");
                  g = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "endTime", r({}, u, {
              get: function() {
                  return p
              },
              set: function(I) {
                  if (typeof I != "number") throw new TypeError("End time must be set to a number.");
                  p = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "text", r({}, u, {
              get: function() {
                  return T
              },
              set: function(I) {
                  T = "" + I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "region", r({}, u, {
              get: function() {
                  return y
              },
              set: function(I) {
                  y = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "vertical", r({}, u, {
              get: function() {
                  return S
              },
              set: function(I) {
                  const O = s(I);
                  if (O === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                  S = O, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "snapToLines", r({}, u, {
              get: function() {
                  return E
              },
              set: function(I) {
                  E = !!I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "line", r({}, u, {
              get: function() {
                  return R
              },
              set: function(I) {
                  if (typeof I != "number" && I !== "auto") throw new SyntaxError("An invalid number or illegal string was specified.");
                  R = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "lineAlign", r({}, u, {
              get: function() {
                  return A
              },
              set: function(I) {
                  const O = i(I);
                  if (!O) throw new SyntaxError("An invalid or illegal string was specified.");
                  A = O, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "position", r({}, u, {
              get: function() {
                  return _
              },
              set: function(I) {
                  if (I < 0 || I > 100) throw new Error("Position must be between 0 and 100.");
                  _ = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "positionAlign", r({}, u, {
              get: function() {
                  return D
              },
              set: function(I) {
                  const O = i(I);
                  if (!O) throw new SyntaxError("An invalid or illegal string was specified.");
                  D = O, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "size", r({}, u, {
              get: function() {
                  return C
              },
              set: function(I) {
                  if (I < 0 || I > 100) throw new Error("Size must be between 0 and 100.");
                  C = I, this.hasBeenReset = !0
              }
          })), Object.defineProperty(h, "align", r({}, u, {
              get: function() {
                  return k
              },
              set: function(I) {
                  const O = i(I);
                  if (!O) throw new SyntaxError("An invalid or illegal string was specified.");
                  k = O, this.hasBeenReset = !0
              }
          })), h.displayState = void 0
      }
      return n.prototype.getCueAsHTML = function() {
          return self.WebVTT.convertCueToDOMTree(self, this.text)
      }, n
  }();
  class Ya {
      decode(t, e) {
          if (!t) return "";
          if (typeof t != "string") throw new Error("Error - expected string data.");
          return decodeURIComponent(encodeURIComponent(t))
      }
  }
  
  function ji(a) {
      function t(s, i, r, n) {
          return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(n || 0)
      }
      const e = a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
      return e ? parseFloat(e[2]) > 59 ? t(e[2], e[3], 0, e[4]) : t(e[1], e[2], e[3], e[4]) : null
  }
  class qa {
      constructor() {
          this.values = Object.create(null)
      }
      set(t, e) {
          !this.get(t) && e !== "" && (this.values[t] = e)
      }
      get(t, e, s) {
          return s ? this.has(t) ? this.values[t] : e[s] : this.has(t) ? this.values[t] : e
      }
      has(t) {
          return t in this.values
      }
      alt(t, e, s) {
          for (let i = 0; i < s.length; ++i)
              if (e === s[i]) {
                  this.set(t, e);
                  break
              }
      }
      integer(t, e) {
          /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
      }
      percent(t, e) {
          if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
              const s = parseFloat(e);
              if (s >= 0 && s <= 100) return this.set(t, s), !0
          }
          return !1
      }
  }
  
  function Xi(a, t, e, s) {
      const i = s ? a.split(s) : [a];
      for (const r in i) {
          if (typeof i[r] != "string") continue;
          const n = i[r].split(e);
          if (n.length !== 2) continue;
          const o = n[0],
              l = n[1];
          t(o, l)
      }
  }
  const We = new as(0, 0, ""),
      ee = We.align === "middle" ? "middle" : "center";
  
  function ja(a, t, e) {
      const s = a;
  
      function i() {
          const o = ji(a);
          if (o === null) throw new Error("Malformed timestamp: " + s);
          return a = a.replace(/^[^\sa-zA-Z-]+/, ""), o
      }
  
      function r(o, l) {
          const c = new qa;
          Xi(o, function(d, f) {
              let g;
              switch (d) {
                  case "region":
                      for (let p = e.length - 1; p >= 0; p--)
                          if (e[p].id === f) {
                              c.set(d, e[p].region);
                              break
                          } break;
                  case "vertical":
                      c.alt(d, f, ["rl", "lr"]);
                      break;
                  case "line":
                      g = f.split(","), c.integer(d, g[0]), c.percent(d, g[0]) && c.set("snapToLines", !1), c.alt(d, g[0], ["auto"]), g.length === 2 && c.alt("lineAlign", g[1], ["start", ee, "end"]);
                      break;
                  case "position":
                      g = f.split(","), c.percent(d, g[0]), g.length === 2 && c.alt("positionAlign", g[1], ["start", ee, "end", "line-left", "line-right", "auto"]);
                      break;
                  case "size":
                      c.percent(d, f);
                      break;
                  case "align":
                      c.alt(d, f, ["start", ee, "end", "left", "right"]);
                      break
              }
          }, /:/, /\s/), l.region = c.get("region", null), l.vertical = c.get("vertical", "");
          let h = c.get("line", "auto");
          h === "auto" && We.line === -1 && (h = -1), l.line = h, l.lineAlign = c.get("lineAlign", "start"), l.snapToLines = c.get("snapToLines", !0), l.size = c.get("size", 100), l.align = c.get("align", ee);
          let u = c.get("position", "auto");
          u === "auto" && We.position === 50 && (u = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = u
      }
  
      function n() {
          a = a.replace(/^\s+/, "")
      }
      if (n(), t.startTime = i(), n(), a.slice(0, 3) !== "-->") throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
      a = a.slice(3), n(), t.endTime = i(), n(), r(a, t)
  }
  
  function zi(a) {
      return a.replace(/<br(?: \/)?>/gi, `
  `)
  }
  class Xa {
      constructor() {
          this.state = "INITIAL", this.buffer = "", this.decoder = new Ya, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
      }
      parse(t) {
          const e = this;
          t && (e.buffer += e.decoder.decode(t, {
              stream: !0
          }));
  
          function s() {
              let r = e.buffer,
                  n = 0;
              for (r = zi(r); n < r.length && r[n] !== "\r" && r[n] !== `
  `;) ++n;
              const o = r.slice(0, n);
              return r[n] === "\r" && ++n, r[n] === `
  ` && ++n, e.buffer = r.slice(n), o
          }
  
          function i(r) {
              Xi(r, function(n, o) {}, /:/)
          }
          try {
              let r = "";
              if (e.state === "INITIAL") {
                  if (!/\r\n|\n/.test(e.buffer)) return this;
                  r = s();
                  const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                  if (!(o != null && o[0])) throw new Error("Malformed WebVTT signature.");
                  e.state = "HEADER"
              }
              let n = !1;
              for (; e.buffer;) {
                  if (!/\r\n|\n/.test(e.buffer)) return this;
                  switch (n ? n = !1 : r = s(), e.state) {
                      case "HEADER":
                          /:/.test(r) ? i(r) : r || (e.state = "ID");
                          continue;
                      case "NOTE":
                          r || (e.state = "ID");
                          continue;
                      case "ID":
                          if (/^NOTE($|[ \t])/.test(r)) {
                              e.state = "NOTE";
                              break
                          }
                          if (!r) continue;
                          if (e.cue = new as(0, 0, ""), e.state = "CUE", r.indexOf("-->") === -1) {
                              e.cue.id = r;
                              continue
                          }
                      case "CUE":
                          if (!e.cue) {
                              e.state = "BADCUE";
                              continue
                          }
                          try {
                              ja(r, e.cue, e.regionList)
                          } catch {
                              e.cue = null, e.state = "BADCUE";
                              continue
                          }
                          e.state = "CUETEXT";
                          continue;
                      case "CUETEXT": {
                          const o = r.indexOf("-->") !== -1;
                          if (!r || o && (n = !0)) {
                              e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                              continue
                          }
                          if (e.cue === null) continue;
                          e.cue.text && (e.cue.text += `
  `), e.cue.text += r
                      }
                      continue;
                      case "BADCUE":
                          r || (e.state = "ID")
                  }
              }
          } catch {
              e.state === "CUETEXT" && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = e.state === "INITIAL" ? "BADWEBVTT" : "BADCUE"
          }
          return this
      }
      flush() {
          const t = this;
          try {
              if ((t.cue || t.state === "HEADER") && (t.buffer += `
  
  `, t.parse()), t.state === "INITIAL" || t.state === "BADWEBVTT") throw new Error("Malformed WebVTT signature.")
          } catch (e) {
              t.onparsingerror && t.onparsingerror(e)
          }
          return t.onflush && t.onflush(), this
      }
  }
  const za = /\r\n|\n\r|\n|\r/g,
      _e = function(t, e, s = 0) {
          return t.slice(s, s + e.length) === e
      },
      Qa = function(t) {
          let e = parseInt(t.slice(-3));
          const s = parseInt(t.slice(-6, -4)),
              i = parseInt(t.slice(-9, -7)),
              r = t.length > 9 ? parseInt(t.substring(0, t.indexOf(":"))) : 0;
          if (!F(e) || !F(s) || !F(i) || !F(r)) throw Error(`Malformed X-TIMESTAMP-MAP: Local:${t}`);
          return e += 1e3 * s, e += 60 * 1e3 * i, e += 60 * 60 * 1e3 * r, e
      },
      we = function(t) {
          let e = 5381,
              s = t.length;
          for (; s;) e = e * 33 ^ t.charCodeAt(--s);
          return (e >>> 0).toString()
      };
  
  function os(a, t, e) {
      return we(a.toString()) + we(t.toString()) + we(e)
  }
  const Ja = function(t, e, s) {
      let i = t[e],
          r = t[i.prevCC];
      if (!r || !r.new && i.new) {
          t.ccOffset = t.presentationOffset = i.start, i.new = !1;
          return
      }
      for (;
          (n = r) != null && n.new;) {
          var n;
          t.ccOffset += i.start - r.start, i.new = !1, i = r, r = t[i.prevCC]
      }
      t.presentationOffset = s
  };
  
  function Za(a, t, e, s, i, r, n) {
      const o = new Xa,
          l = St(new Uint8Array(a)).trim().replace(za, `
  `).split(`
  `),
          c = [],
          h = t ? ha(t.baseTime, t.timescale) : 0;
      let u = "00:00.000",
          d = 0,
          f = 0,
          g, p = !0;
      o.oncue = function(T) {
          const y = e[s];
          let S = e.ccOffset;
          const E = (d - h) / 9e4;
          if (y != null && y.new && (f !== void 0 ? S = e.ccOffset = y.start : Ja(e, s, E)), E) {
              if (!t) {
                  g = new Error("Missing initPTS for VTT MPEGTS");
                  return
              }
              S = E - e.presentationOffset
          }
          const R = T.endTime - T.startTime,
              A = gt((T.startTime + S - f) * 9e4, i * 9e4) / 9e4;
          T.startTime = Math.max(A, 0), T.endTime = Math.max(A + R, 0);
          const _ = T.text.trim();
          T.text = decodeURIComponent(encodeURIComponent(_)), T.id || (T.id = os(T.startTime, T.endTime, _)), T.endTime > 0 && c.push(T)
      }, o.onparsingerror = function(T) {
          g = T
      }, o.onflush = function() {
          if (g) {
              n(g);
              return
          }
          r(c)
      }, l.forEach(T => {
          if (p)
              if (_e(T, "X-TIMESTAMP-MAP=")) {
                  p = !1, T.slice(16).split(",").forEach(y => {
                      _e(y, "LOCAL:") ? u = y.slice(6) : _e(y, "MPEGTS:") && (d = parseInt(y.slice(7)))
                  });
                  try {
                      f = Qa(u) / 1e3
                  } catch (y) {
                      g = y
                  }
                  return
              } else T === "" && (p = !1);
          o.parse(T + `
  `)
      }), o.flush()
  }
  const Pe = "stpp.ttml.im1t",
      Qi = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
      Ji = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
      to = {
          left: "start",
          center: "center",
          right: "end",
          start: "start",
          end: "end"
      };
  
  function Js(a, t, e, s) {
      const i = $(new Uint8Array(a), ["mdat"]);
      if (i.length === 0) {
          s(new Error("Could not parse IMSC1 mdat"));
          return
      }
      const r = i.map(o => St(o)),
          n = ca(t.baseTime, 1, t.timescale);
      try {
          r.forEach(o => e(eo(o, n)))
      } catch (o) {
          s(o)
      }
  }
  
  function eo(a, t) {
      const i = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("tt")[0];
      if (!i) throw new Error("Invalid ttml");
      const r = {
              frameRate: 30,
              subFrameRate: 1,
              frameRateMultiplier: 0,
              tickRate: 0
          },
          n = Object.keys(r).reduce((u, d) => (u[d] = i.getAttribute(`ttp:${d}`) || r[d], u), {}),
          o = i.getAttribute("xml:space") !== "preserve",
          l = Zs(Fe(i, "styling", "style")),
          c = Zs(Fe(i, "layout", "region")),
          h = Fe(i, "body", "[begin]");
      return [].map.call(h, u => {
          const d = Zi(u, o);
          if (!d || !u.hasAttribute("begin")) return null;
          const f = Me(u.getAttribute("begin"), n),
              g = Me(u.getAttribute("dur"), n);
          let p = Me(u.getAttribute("end"), n);
          if (f === null) throw ti(u);
          if (p === null) {
              if (g === null) throw ti(u);
              p = f + g
          }
          const T = new as(f - t, p - t, d);
          T.id = os(T.startTime, T.endTime, T.text);
          const y = c[u.getAttribute("region")],
              S = l[u.getAttribute("style")],
              E = so(y, S, l),
              {
                  textAlign: R
              } = E;
          if (R) {
              const A = to[R];
              A && (T.lineAlign = A), T.align = R
          }
          return tt(T, E), T
      }).filter(u => u !== null)
  }
  
  function Fe(a, t, e) {
      const s = a.getElementsByTagName(t)[0];
      return s ? [].slice.call(s.querySelectorAll(e)) : []
  }
  
  function Zs(a) {
      return a.reduce((t, e) => {
          const s = e.getAttribute("xml:id");
          return s && (t[s] = e), t
      }, {})
  }
  
  function Zi(a, t) {
      return [].slice.call(a.childNodes).reduce((e, s, i) => {
          var r;
          return s.nodeName === "br" && i ? e + `
  ` : (r = s.childNodes) != null && r.length ? Zi(s, t) : t ? e + s.textContent.trim().replace(/\s+/g, " ") : e + s.textContent
      }, "")
  }
  
  function so(a, t, e) {
      const s = "http://www.w3.org/ns/ttml#styling";
      let i = null;
      const r = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"],
          n = a != null && a.hasAttribute("style") ? a.getAttribute("style") : null;
      return n && e.hasOwnProperty(n) && (i = e[n]), r.reduce((o, l) => {
          const c = Oe(t, s, l) || Oe(a, s, l) || Oe(i, s, l);
          return c && (o[l] = c), o
      }, {})
  }
  
  function Oe(a, t, e) {
      return a && a.hasAttributeNS(t, e) ? a.getAttributeNS(t, e) : null
  }
  
  function ti(a) {
      return new Error(`Could not parse ttml timestamp ${a}`)
  }
  
  function Me(a, t) {
      if (!a) return null;
      let e = ji(a);
      return e === null && (Qi.test(a) ? e = io(a, t) : Ji.test(a) && (e = ro(a, t))), e
  }
  
  function io(a, t) {
      const e = Qi.exec(a),
          s = (e[4] | 0) + (e[5] | 0) / t.subFrameRate;
      return (e[1] | 0) * 3600 + (e[2] | 0) * 60 + (e[3] | 0) + s / t.frameRate
  }
  
  function ro(a, t) {
      const e = Ji.exec(a),
          s = Number(e[1]);
      switch (e[2]) {
          case "h":
              return s * 3600;
          case "m":
              return s * 60;
          case "ms":
              return s * 1e3;
          case "f":
              return s / t.frameRate;
          case "t":
              return s / t.tickRate
      }
      return s
  }
  class no {
      constructor(t) {
          if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = ei(), this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                  textTrack1: {
                      label: this.config.captionsTextTrack1Label,
                      languageCode: this.config.captionsTextTrack1LanguageCode
                  },
                  textTrack2: {
                      label: this.config.captionsTextTrack2Label,
                      languageCode: this.config.captionsTextTrack2LanguageCode
                  },
                  textTrack3: {
                      label: this.config.captionsTextTrack3Label,
                      languageCode: this.config.captionsTextTrack3LanguageCode
                  },
                  textTrack4: {
                      label: this.config.captionsTextTrack4Label,
                      languageCode: this.config.captionsTextTrack4LanguageCode
                  }
              }, this.config.enableCEA708Captions) {
              const e = new te(this, "textTrack1"),
                  s = new te(this, "textTrack2"),
                  i = new te(this, "textTrack3"),
                  r = new te(this, "textTrack4");
              this.cea608Parser1 = new Xs(1, e, s), this.cea608Parser2 = new Xs(3, i, r)
          }
          t.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(m.FRAG_LOADING, this.onFragLoading, this), t.on(m.FRAG_LOADED, this.onFragLoaded, this), t.on(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(m.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this)
      }
      destroy() {
          const {
              hls: t
          } = this;
          t.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(m.FRAG_LOADING, this.onFragLoading, this), t.off(m.FRAG_LOADED, this.onFragLoaded, this), t.off(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(m.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
      }
      addCues(t, e, s, i, r) {
          let n = !1;
          for (let o = r.length; o--;) {
              const l = r[o],
                  c = oo(l[0], l[1], e, s);
              if (c >= 0 && (l[0] = Math.min(l[0], e), l[1] = Math.max(l[1], s), n = !0, c / (s - e) > .5)) return
          }
          if (n || r.push([e, s]), this.config.renderTextTracksNatively) {
              const o = this.captionsTracks[t];
              this.Cues.newCue(o, e, s, i)
          } else {
              const o = this.Cues.newCue(null, e, s, i);
              this.hls.trigger(m.CUES_PARSED, {
                  type: "captions",
                  cues: o,
                  track: t
              })
          }
      }
      onInitPtsFound(t, {
          frag: e,
          id: s,
          initPTS: i,
          timescale: r
      }) {
          const {
              unparsedVttFrags: n
          } = this;
          s === "main" && (this.initPTS[e.cc] = {
              baseTime: i,
              timescale: r
          }), n.length && (this.unparsedVttFrags = [], n.forEach(o => {
              this.onFragLoaded(m.FRAG_LOADED, o)
          }))
      }
      getExistingTrack(t) {
          const {
              media: e
          } = this;
          if (e)
              for (let s = 0; s < e.textTracks.length; s++) {
                  const i = e.textTracks[s];
                  if (i[t]) return i
              }
          return null
      }
      createCaptionsTrack(t) {
          this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
      }
      createNativeTrack(t) {
          if (this.captionsTracks[t]) return;
          const {
              captionsProperties: e,
              captionsTracks: s,
              media: i
          } = this, {
              label: r,
              languageCode: n
          } = e[t], o = this.getExistingTrack(t);
          if (o) s[t] = o, Nt(s[t]), Si(s[t], i);
          else {
              const l = this.createTextTrack("captions", r, n);
              l && (l[t] = !0, s[t] = l)
          }
      }
      createNonNativeTrack(t) {
          if (this.nonNativeCaptionsTracks[t]) return;
          const e = this.captionsProperties[t];
          if (!e) return;
          const s = e.label,
              i = {
                  _id: t,
                  label: s,
                  kind: "captions",
                  default: e.media ? !!e.media.default : !1,
                  closedCaptions: e.media
              };
          this.nonNativeCaptionsTracks[t] = i, this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
              tracks: [i]
          })
      }
      createTextTrack(t, e, s) {
          const i = this.media;
          if (i) return i.addTextTrack(t, e, s)
      }
      onMediaAttaching(t, e) {
          this.media = e.media, this._cleanTracks()
      }
      onMediaDetaching() {
          const {
              captionsTracks: t
          } = this;
          Object.keys(t).forEach(e => {
              Nt(t[e]), delete t[e]
          }), this.nonNativeCaptionsTracks = {}
      }
      onManifestLoading() {
          this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = ei(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
      }
      _cleanTracks() {
          const {
              media: t
          } = this;
          if (!t) return;
          const e = t.textTracks;
          if (e)
              for (let s = 0; s < e.length; s++) Nt(e[s])
      }
      onSubtitleTracksUpdated(t, e) {
          const s = e.subtitleTracks || [],
              i = s.some(r => r.textCodec === Pe);
          if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
              if (Wi(this.tracks, s)) {
                  this.tracks = s;
                  return
              }
              if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
                  const n = this.media ? this.media.textTracks : null;
                  this.tracks.forEach((o, l) => {
                      let c;
                      if (n && l < n.length) {
                          let h = null;
                          for (let u = 0; u < n.length; u++)
                              if (ao(n[u], o)) {
                                  h = n[u];
                                  break
                              } h && (c = h)
                      }
                      if (c) Nt(c);
                      else {
                          const h = this._captionsOrSubtitlesFromCharacteristics(o);
                          c = this.createTextTrack(h, o.name, o.lang), c && (c.mode = "disabled")
                      }
                      c && (c.groupId = o.groupId, this.textTracks.push(c))
                  })
              } else if (this.tracks.length) {
                  const n = this.tracks.map(o => ({
                      label: o.name,
                      kind: o.type.toLowerCase(),
                      default: o.default,
                      subtitleTrack: o
                  }));
                  this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
                      tracks: n
                  })
              }
          }
      }
      _captionsOrSubtitlesFromCharacteristics(t) {
          if (t.attrs.CHARACTERISTICS) {
              const e = /transcribes-spoken-dialog/gi.test(t.attrs.CHARACTERISTICS),
                  s = /describes-music-and-sound/gi.test(t.attrs.CHARACTERISTICS);
              if (e && s) return "captions"
          }
          return "subtitles"
      }
      onManifestLoaded(t, e) {
          this.config.enableCEA708Captions && e.captions && e.captions.forEach(s => {
              const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
              if (!i) return;
              const r = `textTrack${i[1]}`,
                  n = this.captionsProperties[r];
              n && (n.label = s.name, s.lang && (n.languageCode = s.lang), n.media = s)
          })
      }
      closedCaptionsForLevel(t) {
          const e = this.hls.levels[t.level];
          return e == null ? void 0 : e.attrs["CLOSED-CAPTIONS"]
      }
      onFragLoading(t, e) {
          const {
              cea608Parser1: s,
              cea608Parser2: i,
              lastSn: r,
              lastPartIndex: n
          } = this;
          if (!(!this.enabled || !(s && i)) && e.frag.type === U.MAIN) {
              var o, l;
              const c = e.frag.sn,
                  h = (o = e == null || (l = e.part) == null ? void 0 : l.index) != null ? o : -1;
              c === r + 1 || c === r && h === n + 1 || (s.reset(), i.reset()), this.lastSn = c, this.lastPartIndex = h
          }
      }
      onFragLoaded(t, e) {
          const {
              frag: s,
              payload: i
          } = e;
          if (s.type === U.SUBTITLE)
              if (i.byteLength) {
                  const r = s.decryptdata,
                      n = "stats" in e;
                  if (r == null || !r.encrypted || n) {
                      const o = this.tracks[s.level],
                          l = this.vttCCs;
                      l[s.cc] || (l[s.cc] = {
                          start: s.start,
                          prevCC: this.prevCC,
                          new: !0
                      }, this.prevCC = s.cc), o && o.textCodec === Pe ? this._parseIMSC1(s, i) : this._parseVTTs(e)
                  }
              } else this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
                  success: !1,
                  frag: s,
                  error: new Error("Empty subtitle payload")
              })
      }
      _parseIMSC1(t, e) {
          const s = this.hls;
          Js(e, this.initPTS[t.cc], i => {
              this._appendCues(i, t.level), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
                  success: !0,
                  frag: t
              })
          }, i => {
              x.log(`Failed to parse IMSC1: ${i}`), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
                  success: !1,
                  frag: t,
                  error: i
              })
          })
      }
      _parseVTTs(t) {
          var e;
          const {
              frag: s,
              payload: i
          } = t, {
              initPTS: r,
              unparsedVttFrags: n
          } = this, o = r.length - 1;
          if (!r[s.cc] && o === -1) {
              n.push(t);
              return
          }
          const l = this.hls,
              c = (e = s.initSegment) != null && e.data ? wt(s.initSegment.data, new Uint8Array(i)) : i;
          Za(c, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, h => {
              this._appendCues(h, s.level), l.trigger(m.SUBTITLE_FRAG_PROCESSED, {
                  success: !0,
                  frag: s
              })
          }, h => {
              const u = h.message === "Missing initPTS for VTT MPEGTS";
              u ? n.push(t) : this._fallbackToIMSC1(s, i), x.log(`Failed to parse VTT cue: ${h}`), !(u && o > s.cc) && l.trigger(m.SUBTITLE_FRAG_PROCESSED, {
                  success: !1,
                  frag: s,
                  error: h
              })
          })
      }
      _fallbackToIMSC1(t, e) {
          const s = this.tracks[t.level];
          s.textCodec || Js(e, this.initPTS[t.cc], () => {
              s.textCodec = Pe, this._parseIMSC1(t, e)
          }, () => {
              s.textCodec = "wvtt"
          })
      }
      _appendCues(t, e) {
          const s = this.hls;
          if (this.config.renderTextTracksNatively) {
              const i = this.textTracks[e];
              if (!i || i.mode === "disabled") return;
              t.forEach(r => vi(i, r))
          } else {
              const i = this.tracks[e];
              if (!i) return;
              const r = i.default ? "default" : "subtitles" + e;
              s.trigger(m.CUES_PARSED, {
                  type: "subtitles",
                  cues: t,
                  track: r
              })
          }
      }
      onFragDecrypted(t, e) {
          const {
              frag: s
          } = e;
          s.type === U.SUBTITLE && this.onFragLoaded(m.FRAG_LOADED, e)
      }
      onSubtitleTracksCleared() {
          this.tracks = [], this.captionsTracks = {}
      }
      onFragParsingUserdata(t, e) {
          const {
              cea608Parser1: s,
              cea608Parser2: i
          } = this;
          if (!this.enabled || !(s && i)) return;
          const {
              frag: r,
              samples: n
          } = e;
          if (!(r.type === U.MAIN && this.closedCaptionsForLevel(r) === "NONE"))
              for (let o = 0; o < n.length; o++) {
                  const l = n[o].bytes;
                  if (l) {
                      const c = this.extractCea608Data(l);
                      s.addData(n[o].pts, c[0]), i.addData(n[o].pts, c[1])
                  }
              }
      }
      onBufferFlushing(t, {
          startOffset: e,
          endOffset: s,
          endOffsetSubtitles: i,
          type: r
      }) {
          const {
              media: n
          } = this;
          if (!(!n || n.currentTime < s)) {
              if (!r || r === "video") {
                  const {
                      captionsTracks: o
                  } = this;
                  Object.keys(o).forEach(l => Be(o[l], e, s))
              }
              if (this.config.renderTextTracksNatively && e === 0 && i !== void 0) {
                  const {
                      textTracks: o
                  } = this;
                  Object.keys(o).forEach(l => Be(o[l], e, i))
              }
          }
      }
      extractCea608Data(t) {
          const e = [
                  [],
                  []
              ],
              s = t[0] & 31;
          let i = 2;
          for (let r = 0; r < s; r++) {
              const n = t[i++],
                  o = 127 & t[i++],
                  l = 127 & t[i++];
              if (o === 0 && l === 0) continue;
              if ((4 & n) !== 0) {
                  const h = 3 & n;
                  (h === 0 || h === 1) && (e[h].push(o), e[h].push(l))
              }
          }
          return e
      }
  }
  
  function ao(a, t) {
      return !!a && a.label === t.name && !(a.textTrack1 || a.textTrack2)
  }
  
  function oo(a, t, e, s) {
      return Math.min(t, s) - Math.max(a, e)
  }
  
  function ei() {
      return {
          ccOffset: 0,
          presentationOffset: 0,
          0: {
              start: 0,
              prevCC: -1,
              new: !0
          }
      }
  }
  class ls {
      constructor(t) {
          this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
      }
      setStreamController(t) {
          this.streamController = t
      }
      destroy() {
          this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
      }
      registerListeners() {
          const {
              hls: t
          } = this;
          t.on(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.BUFFER_CODECS, this.onBufferCodecs, this), t.on(m.MEDIA_DETACHING, this.onMediaDetaching, this)
      }
      unregisterListener() {
          const {
              hls: t
          } = this;
          t.off(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.BUFFER_CODECS, this.onBufferCodecs, this), t.off(m.MEDIA_DETACHING, this.onMediaDetaching, this)
      }
      onFpsDropLevelCapping(t, e) {
          const s = this.hls.levels[e.droppedLevel];
          this.isLevelAllowed(s) && this.restrictedLevels.push({
              bitrate: s.bitrate,
              height: s.height,
              width: s.width
          })
      }
      onMediaAttaching(t, e) {
          this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null
      }
      onManifestParsed(t, e) {
          const s = this.hls;
          this.restrictedLevels = [], this.firstLevel = e.firstLevel, s.config.capLevelToPlayerSize && e.video && this.startCapping()
      }
      onBufferCodecs(t, e) {
          this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
      }
      onMediaDetaching() {
          this.stopCapping()
      }
      detectPlayerSize() {
          if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
              const t = this.hls.levels;
              if (t.length) {
                  const e = this.hls;
                  e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
              }
          }
      }
      getMaxLevel(t) {
          const e = this.hls.levels;
          if (!e.length) return -1;
          const s = e.filter((i, r) => this.isLevelAllowed(i) && r <= t);
          return this.clientRect = null, ls.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight)
      }
      startCapping() {
          this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
      }
      stopCapping() {
          this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
      }
      getDimensions() {
          if (this.clientRect) return this.clientRect;
          const t = this.media,
              e = {
                  width: 0,
                  height: 0
              };
          if (t) {
              const s = t.getBoundingClientRect();
              e.width = s.width, e.height = s.height, !e.width && !e.height && (e.width = s.right - s.left || t.width || 0, e.height = s.bottom - s.top || t.height || 0)
          }
          return this.clientRect = e, e
      }
      get mediaWidth() {
          return this.getDimensions().width * this.contentScaleFactor
      }
      get mediaHeight() {
          return this.getDimensions().height * this.contentScaleFactor
      }
      get contentScaleFactor() {
          let t = 1;
          if (!this.hls.config.ignoreDevicePixelRatio) try {
              t = self.devicePixelRatio
          } catch {}
          return t
      }
      isLevelAllowed(t) {
          return !this.restrictedLevels.some(s => t.bitrate === s.bitrate && t.width === s.width && t.height === s.height)
      }
      static getMaxLevelByMediaSize(t, e, s) {
          if (!(t != null && t.length)) return -1;
          const i = (n, o) => o ? n.width !== o.width || n.height !== o.height : !0;
          let r = t.length - 1;
          for (let n = 0; n < t.length; n += 1) {
              const o = t[n];
              if ((o.width >= e || o.height >= s) && i(o, t[n + 1])) {
                  r = n;
                  break
              }
          }
          return r
      }
  }
  class lo {
      constructor(t) {
          this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
      }
      setStreamController(t) {
          this.streamController = t
      }
      registerListeners() {
          this.hls.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this)
      }
      unregisterListeners() {
          this.hls.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this)
      }
      destroy() {
          this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
      }
      onMediaAttaching(t, e) {
          const s = this.hls.config;
          if (s.capLevelOnFPSDrop) {
              const i = e.media instanceof self.HTMLVideoElement ? e.media : null;
              this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod)
          }
      }
      checkFPS(t, e, s) {
          const i = performance.now();
          if (e) {
              if (this.lastTime) {
                  const r = i - this.lastTime,
                      n = s - this.lastDroppedFrames,
                      o = e - this.lastDecodedFrames,
                      l = 1e3 * n / r,
                      c = this.hls;
                  if (c.trigger(m.FPS_DROP, {
                          currentDropped: n,
                          currentDecoded: o,
                          totalDroppedFrames: s
                      }), l > 0 && n > c.config.fpsDroppedMonitoringThreshold * o) {
                      let h = c.currentLevel;
                      x.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (c.autoLevelCapping === -1 || c.autoLevelCapping >= h) && (h = h - 1, c.trigger(m.FPS_DROP_LEVEL_CAPPING, {
                          level: h,
                          droppedLevel: c.currentLevel
                      }), c.autoLevelCapping = h, this.streamController.nextLevelSwitch())
                  }
              }
              this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = e
          }
      }
      checkFPSInterval() {
          const t = this.media;
          if (t)
              if (this.isVideoPlaybackQualityAvailable) {
                  const e = t.getVideoPlaybackQuality();
                  this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
              } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
      }
  }
  const se = "[eme]";
  class Bt {
      constructor(t) {
          this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Bt.CDMCleanupPromise ? [Bt.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = x.debug.bind(x, se), this.log = x.log.bind(x, se), this.warn = x.warn.bind(x, se), this.error = x.error.bind(x, se), this.hls = t, this.config = t.config, this.registerListeners()
      }
      destroy() {
          this.unregisterListeners(), this.onMediaDetached();
          const t = this.config;
          t.requestMediaKeySystemAccessFunc = null, t.licenseXhrSetup = t.licenseResponseCallback = void 0, t.drmSystems = t.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null
      }
      registerListeners() {
          this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.MANIFEST_LOADED, this.onManifestLoaded, this)
      }
      unregisterListeners() {
          this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.MANIFEST_LOADED, this.onManifestLoaded, this)
      }
      getLicenseServerUrl(t) {
          const {
              drmSystems: e,
              widevineLicenseUrl: s
          } = this.config, i = e[t];
          if (i) return i.licenseUrl;
          if (t === J.WIDEVINE && s) return s;
          throw new Error(`no license server URL configured for key-system "${t}"`)
      }
      getServerCertificateUrl(t) {
          const {
              drmSystems: e
          } = this.config, s = e[t];
          if (s) return s.serverCertificateUrl;
          this.log(`No Server Certificate in config.drmSystems["${t}"]`)
      }
      attemptKeySystemAccess(t) {
          const e = this.hls.levels,
              s = (n, o, l) => !!n && l.indexOf(n) === o,
              i = e.map(n => n.audioCodec).filter(s),
              r = e.map(n => n.videoCodec).filter(s);
          return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((n, o) => {
              const l = c => {
                  const h = c.shift();
                  this.getMediaKeysPromise(h, i, r).then(u => n({
                      keySystem: h,
                      mediaKeys: u
                  })).catch(u => {
                      c.length ? l(c) : u instanceof dt ? o(u) : o(new dt({
                          type: N.KEY_SYSTEM_ERROR,
                          details: L.KEY_SYSTEM_NO_ACCESS,
                          error: u,
                          fatal: !0
                      }, u.message))
                  })
              };
              l(t)
          })
      }
      requestMediaKeySystemAccess(t, e) {
          const {
              requestMediaKeySystemAccessFunc: s
          } = this.config;
          if (typeof s != "function") {
              let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
              return ci === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i))
          }
          return s(t, e)
      }
      getMediaKeysPromise(t, e, s) {
          const i = Sr(t, e, s, this.config.drmSystemOptions),
              r = this.keySystemAccessPromises[t];
          let n = r == null ? void 0 : r.keySystemAccess;
          if (!n) {
              this.log(`Requesting encrypted media "${t}" key-system access with config: ${JSON.stringify(i)}`), n = this.requestMediaKeySystemAccess(t, i);
              const o = this.keySystemAccessPromises[t] = {
                  keySystemAccess: n
              };
              return n.catch(l => {
                  this.log(`Failed to obtain access to key-system "${t}": ${l}`)
              }), n.then(l => {
                  this.log(`Access for key-system "${l.keySystem}" obtained`);
                  const c = this.fetchServerCertificate(t);
                  return this.log(`Create media-keys for "${t}"`), o.mediaKeys = l.createMediaKeys().then(h => (this.log(`Media-keys created for "${t}"`), c.then(u => u ? this.setMediaKeysServerCertificate(h, t, u) : h))), o.mediaKeys.catch(h => {
                      this.error(`Failed to create media-keys for "${t}"}: ${h}`)
                  }), o.mediaKeys
              })
          }
          return n.then(() => r.mediaKeys)
      }
      createMediaKeySessionContext({
          decryptdata: t,
          keySystem: e,
          mediaKeys: s
      }) {
          this.log(`Creating key-system session "${e}" keyId: ${xt.hexDump(t.keyId||[])}`);
          const i = s.createSession(),
              r = {
                  decryptdata: t,
                  keySystem: e,
                  mediaKeys: s,
                  mediaKeysSession: i,
                  keyStatus: "status-pending"
              };
          return this.mediaKeySessions.push(r), r
      }
      renewKeySession(t) {
          const e = t.decryptdata;
          if (e.pssh) {
              const s = this.createMediaKeySessionContext(t),
                  i = this.getKeyIdString(e),
                  r = "cenc";
              this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, e.pssh, "expired")
          } else this.warn("Could not renew expired session. Missing pssh initData.");
          this.removeSession(t)
      }
      getKeyIdString(t) {
          if (!t) throw new Error("Could not read keyId of undefined decryptdata");
          if (t.keyId === null) throw new Error("keyId is null");
          return xt.hexDump(t.keyId)
      }
      updateKeySession(t, e) {
          var s;
          const i = t.mediaKeysSession;
          return this.log(`Updating key-session "${i.sessionId}" for keyID ${xt.hexDump(((s=t.decryptdata)==null?void 0:s.keyId)||[])}
        } (data length: ${e&&e.byteLength})`), i.update(e)
      }
      selectKeySystemFormat(t) {
          const e = Object.keys(t.levelkeys || {});
          return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${t.sn} ${t.type}: ${t.level}) key formats ${e.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(e)), this.keyFormatPromise
      }
      getKeyFormatPromise(t) {
          return new Promise((e, s) => {
              const i = me(this.config),
                  r = t.map(us).filter(n => !!n && i.indexOf(n) !== -1);
              return this.getKeySystemSelectionPromise(r).then(({
                  keySystem: n
              }) => {
                  const o = ds(n);
                  o ? e(o) : s(new Error(`Unable to find format for key-system "${n}"`))
              }).catch(s)
          })
      }
      loadKey(t) {
          const e = t.keyInfo.decryptdata,
              s = this.getKeyIdString(e),
              i = `(keyId: ${s} format: "${e.keyFormat}" method: ${e.method} uri: ${e.uri})`;
          this.log(`Starting session for key ${i}`);
          let r = this.keyIdToKeySessionPromise[s];
          return r || (r = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(e).then(({
              keySystem: n,
              mediaKeys: o
          }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${t.frag.sn} ${t.frag.type}: ${t.frag.level} using key ${i}`), this.attemptSetMediaKeys(n, o).then(() => {
              this.throwIfDestroyed();
              const l = this.createMediaKeySessionContext({
                      keySystem: n,
                      mediaKeys: o,
                      decryptdata: e
                  }),
                  c = "cenc";
              return this.generateRequestWithPreferredKeySession(l, c, e.pssh, "playlist-key")
          }))), r.catch(n => this.handleError(n))), r
      }
      throwIfDestroyed(t = "Invalid state") {
          if (!this.hls) throw new Error("invalid state")
      }
      handleError(t) {
          this.hls && (this.error(t.message), t instanceof dt ? this.hls.trigger(m.ERROR, t.data) : this.hls.trigger(m.ERROR, {
              type: N.KEY_SYSTEM_ERROR,
              details: L.KEY_SYSTEM_NO_KEYS,
              error: t,
              fatal: !0
          }))
      }
      getKeySystemForKeyPromise(t) {
          const e = this.getKeyIdString(t),
              s = this.keyIdToKeySessionPromise[e];
          if (!s) {
              const i = us(t.keyFormat),
                  r = i ? [i] : me(this.config);
              return this.attemptKeySystemAccess(r)
          }
          return s
      }
      getKeySystemSelectionPromise(t) {
          if (t.length || (t = me(this.config)), t.length === 0) throw new dt({
              type: N.KEY_SYSTEM_ERROR,
              details: L.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
              fatal: !0
          }, `Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);
          return this.attemptKeySystemAccess(t)
      }
      _onMediaEncrypted(t) {
          const {
              initDataType: e,
              initData: s
          } = t;
          if (this.debug(`"${t.type}" event: init data type: "${e}"`), s === null) return;
          let i, r;
          if (e === "sinf" && this.config.drmSystems[J.FAIRPLAY]) {
              const h = st(new Uint8Array(s));
              try {
                  const u = je(JSON.parse(h).sinf),
                      d = Ti(new Uint8Array(u));
                  if (!d) return;
                  i = d.subarray(8, 24), r = J.FAIRPLAY
              } catch {
                  this.warn('Failed to parse sinf "encrypted" event message initData');
                  return
              }
          } else {
              const h = Wr(s);
              if (h === null) return;
              h.version === 0 && h.systemId === li.WIDEVINE && h.data && (i = h.data.subarray(8, 24)), r = Er(h.systemId)
          }
          if (!r || !i) return;
          const n = xt.hexDump(i),
              {
                  keyIdToKeySessionPromise: o,
                  mediaKeySessions: l
              } = this;
          let c = o[n];
          for (let h = 0; h < l.length; h++) {
              const u = l[h],
                  d = u.decryptdata;
              if (d.pssh || !d.keyId) continue;
              const f = xt.hexDump(d.keyId);
              if (n === f || d.uri.replace(/-/g, "").indexOf(n) !== -1) {
                  c = o[f], delete o[f], d.pssh = new Uint8Array(s), d.keyId = i, c = o[n] = c.then(() => this.generateRequestWithPreferredKeySession(u, e, s, "encrypted-event-key-match"));
                  break
              }
          }
          c || (c = o[n] = this.getKeySystemSelectionPromise([r]).then(({
              keySystem: h,
              mediaKeys: u
          }) => {
              var d;
              this.throwIfDestroyed();
              const f = new Vt("ISO-23001-7", n, (d = ds(h)) != null ? d : "");
              return f.pssh = new Uint8Array(s), f.keyId = i, this.attemptSetMediaKeys(h, u).then(() => {
                  this.throwIfDestroyed();
                  const g = this.createMediaKeySessionContext({
                      decryptdata: f,
                      keySystem: h,
                      mediaKeys: u
                  });
                  return this.generateRequestWithPreferredKeySession(g, e, s, "encrypted-event-no-match")
              })
          })), c.catch(h => this.handleError(h))
      }
      _onWaitingForKey(t) {
          this.log(`"${t.type}" event`)
      }
      attemptSetMediaKeys(t, e) {
          const s = this.setMediaKeysQueue.slice();
          this.log(`Setting media-keys for "${t}"`);
          const i = Promise.all(s).then(() => {
              if (!this.media) throw new Error("Attempted to set mediaKeys without media element attached");
              return this.media.setMediaKeys(e)
          });
          return this.setMediaKeysQueue.push(i), i.then(() => {
              this.log(`Media-keys set for "${t}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter(r => s.indexOf(r) === -1)
          })
      }
      generateRequestWithPreferredKeySession(t, e, s, i) {
          var r, n;
          const o = (r = this.config.drmSystems) == null || (n = r[t.keySystem]) == null ? void 0 : n.generateRequest;
          if (o) try {
              const d = o.call(this.hls, e, s, t);
              if (!d) throw new Error("Invalid response from configured generateRequest filter");
              e = d.initDataType, s = t.decryptdata.pssh = d.initData ? new Uint8Array(d.initData) : null
          } catch (d) {
              var l;
              if (this.warn(d.message), (l = this.hls) != null && l.config.debug) throw d
          }
          if (s === null) return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(t);
          const c = this.getKeyIdString(t.decryptdata);
          this.log(`Generating key-session request for "${i}": ${c} (init data type: ${e} length: ${s?s.byteLength:null})`);
          const h = new ns;
          t.mediaKeysSession.onmessage = d => {
              const f = t.mediaKeysSession;
              if (!f) {
                  h.emit("error", new Error("invalid state"));
                  return
              }
              const {
                  messageType: g,
                  message: p
              } = d;
              this.log(`"${g}" message event for session "${f.sessionId}" message size: ${p.byteLength}`), g === "license-request" || g === "license-renewal" ? this.renewLicense(t, p).catch(T => {
                  this.handleError(T), h.emit("error", T)
              }) : g === "license-release" ? t.keySystem === J.FAIRPLAY && (this.updateKeySession(t, oi("acknowledged")), this.removeSession(t)) : this.warn(`unhandled media key message type "${g}"`)
          }, t.mediaKeysSession.onkeystatuseschange = d => {
              if (!t.mediaKeysSession) {
                  h.emit("error", new Error("invalid state"));
                  return
              }
              this.onKeyStatusChange(t);
              const g = t.keyStatus;
              h.emit("keyStatus", g), g === "expired" && (this.warn(`${t.keySystem} expired for key ${c}`), this.renewKeySession(t))
          };
          const u = new Promise((d, f) => {
              h.on("error", f), h.on("keyStatus", g => {
                  g.startsWith("usable") ? d() : g === "output-restricted" ? f(new dt({
                      type: N.KEY_SYSTEM_ERROR,
                      details: L.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
                      fatal: !1
                  }, "HDCP level output restricted")) : g === "internal-error" ? f(new dt({
                      type: N.KEY_SYSTEM_ERROR,
                      details: L.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
                      fatal: !0
                  }, `key status changed to "${g}"`)) : g === "expired" ? f(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${g}"`)
              })
          });
          return t.mediaKeysSession.generateRequest(e, s).then(() => {
              var d;
              this.log(`Request generated for key-session "${(d=t.mediaKeysSession)==null?void 0:d.sessionId}" keyId: ${c}`)
          }).catch(d => {
              throw new dt({
                  type: N.KEY_SYSTEM_ERROR,
                  details: L.KEY_SYSTEM_NO_SESSION,
                  error: d,
                  fatal: !1
              }, `Error generating key-session request: ${d}`)
          }).then(() => u).catch(d => {
              throw h.removeAllListeners(), this.removeSession(t), d
          }).then(() => (h.removeAllListeners(), t))
      }
      onKeyStatusChange(t) {
          t.mediaKeysSession.keyStatuses.forEach((e, s) => {
              this.log(`key status change "${e}" for keyStatuses keyId: ${xt.hexDump("buffer"in s?new Uint8Array(s.buffer,s.byteOffset,s.byteLength):new Uint8Array(s))} session keyId: ${xt.hexDump(new Uint8Array(t.decryptdata.keyId||[]))} uri: ${t.decryptdata.uri}`), t.keyStatus = e
          })
      }
      fetchServerCertificate(t) {
          const e = this.config,
              s = e.loader,
              i = new s(e),
              r = this.getServerCertificateUrl(t);
          return r ? (this.log(`Fetching serverCertificate for "${t}"`), new Promise((n, o) => {
              const l = {
                      responseType: "arraybuffer",
                      url: r
                  },
                  c = e.certLoadPolicy.default,
                  h = {
                      loadPolicy: c,
                      timeout: c.maxLoadTimeMs,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: 0
                  },
                  u = {
                      onSuccess: (d, f, g, p) => {
                          n(d.data)
                      },
                      onError: (d, f, g, p) => {
                          o(new dt({
                              type: N.KEY_SYSTEM_ERROR,
                              details: L.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                              fatal: !0,
                              networkDetails: g,
                              response: at({
                                  url: l.url,
                                  data: void 0
                              }, d)
                          }, `"${t}" certificate request failed (${r}). Status: ${d.code} (${d.text})`))
                      },
                      onTimeout: (d, f, g) => {
                          o(new dt({
                              type: N.KEY_SYSTEM_ERROR,
                              details: L.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
                              fatal: !0,
                              networkDetails: g,
                              response: {
                                  url: l.url,
                                  data: void 0
                              }
                          }, `"${t}" certificate request timed out (${r})`))
                      },
                      onAbort: (d, f, g) => {
                          o(new Error("aborted"))
                      }
                  };
              i.load(l, h, u)
          })) : Promise.resolve()
      }
      setMediaKeysServerCertificate(t, e, s) {
          return new Promise((i, r) => {
              t.setServerCertificate(s).then(n => {
                  this.log(`setServerCertificate ${n?"success":"not supported by CDM"} (${s==null?void 0:s.byteLength}) on "${e}"`), i(t)
              }).catch(n => {
                  r(new dt({
                      type: N.KEY_SYSTEM_ERROR,
                      details: L.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
                      error: n,
                      fatal: !0
                  }, n.message))
              })
          })
      }
      renewLicense(t, e) {
          return this.requestLicense(t, new Uint8Array(e)).then(s => this.updateKeySession(t, new Uint8Array(s)).catch(i => {
              throw new dt({
                  type: N.KEY_SYSTEM_ERROR,
                  details: L.KEY_SYSTEM_SESSION_UPDATE_FAILED,
                  error: i,
                  fatal: !0
              }, i.message)
          }))
      }
      setupLicenseXHR(t, e, s, i) {
          const r = this.config.licenseXhrSetup;
          return r ? Promise.resolve().then(() => {
              if (!s.decryptdata) throw new Error("Key removed");
              return r.call(this.hls, t, e, s, i)
          }).catch(n => {
              if (!s.decryptdata) throw n;
              return t.open("POST", e, !0), r.call(this.hls, t, e, s, i)
          }).then(n => (t.readyState || t.open("POST", e, !0), {
              xhr: t,
              licenseChallenge: n || i
          })) : (t.open("POST", e, !0), Promise.resolve({
              xhr: t,
              licenseChallenge: i
          }))
      }
      requestLicense(t, e) {
          const s = this.config.keyLoadPolicy.default;
          return new Promise((i, r) => {
              const n = this.getLicenseServerUrl(t.keySystem);
              this.log(`Sending license request to URL: ${n}`);
              const o = new XMLHttpRequest;
              o.responseType = "arraybuffer", o.onreadystatechange = () => {
                  if (!this.hls || !t.mediaKeysSession) return r(new Error("invalid state"));
                  if (o.readyState === 4)
                      if (o.status === 200) {
                          this._requestLicenseFailureCount = 0;
                          let l = o.response;
                          this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);
                          const c = this.config.licenseResponseCallback;
                          if (c) try {
                              l = c.call(this.hls, o, n, t)
                          } catch (h) {
                              this.error(h)
                          }
                          i(l)
                      } else {
                          const l = s.errorRetry,
                              c = l ? l.maxNumRetry : 0;
                          if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > c || o.status >= 400 && o.status < 500) r(new dt({
                              type: N.KEY_SYSTEM_ERROR,
                              details: L.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                              fatal: !0,
                              networkDetails: o,
                              response: {
                                  url: n,
                                  data: void 0,
                                  code: o.status,
                                  text: o.statusText
                              }
                          }, `License Request XHR failed (${n}). Status: ${o.status} (${o.statusText})`));
                          else {
                              const h = c - this._requestLicenseFailureCount + 1;
                              this.warn(`Retrying license request, ${h} attempts left`), this.requestLicense(t, e).then(i, r)
                          }
                      }
              }, t.licenseXhr && t.licenseXhr.readyState !== XMLHttpRequest.DONE && t.licenseXhr.abort(), t.licenseXhr = o, this.setupLicenseXHR(o, n, t, e).then(({
                  xhr: l,
                  licenseChallenge: c
              }) => {
                  l.send(c)
              })
          })
      }
      onMediaAttached(t, e) {
          if (!this.config.emeEnabled) return;
          const s = e.media;
          this.media = s, s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey)
      }
      onMediaDetached() {
          const t = this.media,
              e = this.mediaKeySessions;
          t && (t.removeEventListener("encrypted", this.onMediaEncrypted), t.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Vt.clearKeyUriToKeyIdMap();
          const s = e.length;
          Bt.CDMCleanupPromise = Promise.all(e.map(i => this.removeSession(i)).concat(t == null ? void 0 : t.setMediaKeys(null).catch(i => {
              this.log(`Could not clear media keys: ${i}. media.src: ${t==null?void 0:t.src}`)
          }))).then(() => {
              s && (this.log("finished closing key sessions and clearing media keys"), e.length = 0)
          }).catch(i => {
              this.log(`Could not close sessions and clear media keys: ${i}. media.src: ${t==null?void 0:t.src}`)
          })
      }
      onManifestLoading() {
          this.keyFormatPromise = null
      }
      onManifestLoaded(t, {
          sessionKeys: e
      }) {
          if (!(!e || !this.config.emeEnabled) && !this.keyFormatPromise) {
              const s = e.reduce((i, r) => (i.indexOf(r.keyFormat) === -1 && i.push(r.keyFormat), i), []);
              this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s)
          }
      }
      removeSession(t) {
          const {
              mediaKeysSession: e,
              licenseXhr: s
          } = t;
          if (e) {
              this.log(`Remove licenses and keys and close session ${e.sessionId}`), e.onmessage = null, e.onkeystatuseschange = null, s && s.readyState !== XMLHttpRequest.DONE && s.abort(), t.mediaKeysSession = t.decryptdata = t.licenseXhr = void 0;
              const i = this.mediaKeySessions.indexOf(t);
              return i > -1 && this.mediaKeySessions.splice(i, 1), e.remove().catch(r => {
                  this.log(`Could not remove session: ${r}`)
              }).then(() => e.close()).catch(r => {
                  this.log(`Could not close session: ${r}`)
              })
          }
      }
  }
  Bt.CDMCleanupPromise = void 0;
  class dt extends Error {
      constructor(t, e) {
          super(e), this.data = void 0, t.error || (t.error = new Error(e)), this.data = t, t.err = t.error
      }
  }
  const co = 1;
  var ot = {
      MANIFEST: "m",
      AUDIO: "a",
      VIDEO: "v",
      MUXED: "av",
      INIT: "i",
      CAPTION: "c",
      TIMED_TEXT: "tt",
      KEY: "k",
      OTHER: "o"
  };
  const ho = "h";
  class bt {
      constructor(t) {
          this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
              this.initialized && (this.starved = !0), this.buffering = !0
          }, this.onPlaying = () => {
              this.initialized || (this.initialized = !0), this.buffering = !1
          }, this.applyPlaylistData = i => {
              try {
                  this.apply(i, {
                      ot: ot.MANIFEST,
                      su: !this.initialized
                  })
              } catch (r) {
                  x.warn("Could not generate manifest CMCD data.", r)
              }
          }, this.applyFragmentData = i => {
              try {
                  const r = i.frag,
                      n = this.hls.levels[r.level],
                      o = this.getObjectType(r),
                      l = {
                          d: r.duration * 1e3,
                          ot: o
                      };
                  (o === ot.VIDEO || o === ot.AUDIO || o == ot.MUXED) && (l.br = n.bitrate / 1e3, l.tb = this.getTopBandwidth(o) / 1e3, l.bl = this.getBufferLength(o)), this.apply(i, l)
              } catch (r) {
                  x.warn("Could not generate segment CMCD data.", r)
              }
          }, this.hls = t;
          const e = this.config = t.config,
              {
                  cmcd: s
              } = e;
          s != null && (e.pLoader = this.createPlaylistLoader(), e.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || bt.uuid(), this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.registerListeners())
      }
      registerListeners() {
          const t = this.hls;
          t.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(m.MEDIA_DETACHED, this.onMediaDetached, this), t.on(m.BUFFER_CREATED, this.onBufferCreated, this)
      }
      unregisterListeners() {
          const t = this.hls;
          t.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(m.MEDIA_DETACHED, this.onMediaDetached, this), t.off(m.BUFFER_CREATED, this.onBufferCreated, this)
      }
      destroy() {
          this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
      }
      onMediaAttached(t, e) {
          this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
      }
      onMediaDetached() {
          this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
      }
      onBufferCreated(t, e) {
          var s, i;
          this.audioBuffer = (s = e.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = e.tracks.video) == null ? void 0 : i.buffer
      }
      createData() {
          var t;
          return {
              v: co,
              sf: ho,
              sid: this.sid,
              cid: this.cid,
              pr: (t = this.media) == null ? void 0 : t.playbackRate,
              mtp: this.hls.bandwidthEstimate / 1e3
          }
      }
      apply(t, e = {}) {
          tt(e, this.createData());
          const s = e.ot === ot.INIT || e.ot === ot.VIDEO || e.ot === ot.MUXED;
          if (this.starved && s && (e.bs = !0, e.su = !0, this.starved = !1), e.su == null && (e.su = this.buffering), this.useHeaders) {
              const i = bt.toHeaders(e);
              if (!Object.keys(i).length) return;
              t.headers || (t.headers = {}), tt(t.headers, i)
          } else {
              const i = bt.toQuery(e);
              if (!i) return;
              t.url = bt.appendQueryToUri(t.url, i)
          }
      }
      getObjectType(t) {
          const {
              type: e
          } = t;
          if (e === "subtitle") return ot.TIMED_TEXT;
          if (t.sn === "initSegment") return ot.INIT;
          if (e === "audio") return ot.AUDIO;
          if (e === "main") return this.hls.audioTracks.length ? ot.VIDEO : ot.MUXED
      }
      getTopBandwidth(t) {
          let e = 0,
              s;
          const i = this.hls;
          if (t === ot.AUDIO) s = i.audioTracks;
          else {
              const r = i.maxAutoLevel,
                  n = r > -1 ? r + 1 : i.levels.length;
              s = i.levels.slice(0, n)
          }
          for (const r of s) r.bitrate > e && (e = r.bitrate);
          return e > 0 ? e : NaN
      }
      getBufferLength(t) {
          const e = this.hls.media,
              s = t === ot.AUDIO ? this.audioBuffer : this.videoBuffer;
          return !s || !e ? NaN : q.bufferInfo(s, e.currentTime, this.config.maxBufferHole).len * 1e3
      }
      createPlaylistLoader() {
          const {
              pLoader: t
          } = this.config, e = this.applyPlaylistData, s = t || this.config.loader;
          return class {
              constructor(r) {
                  this.loader = void 0, this.loader = new s(r)
              }
              get stats() {
                  return this.loader.stats
              }
              get context() {
                  return this.loader.context
              }
              destroy() {
                  this.loader.destroy()
              }
              abort() {
                  this.loader.abort()
              }
              load(r, n, o) {
                  e(r), this.loader.load(r, n, o)
              }
          }
      }
      createFragmentLoader() {
          const {
              fLoader: t
          } = this.config, e = this.applyFragmentData, s = t || this.config.loader;
          return class {
              constructor(r) {
                  this.loader = void 0, this.loader = new s(r)
              }
              get stats() {
                  return this.loader.stats
              }
              get context() {
                  return this.loader.context
              }
              destroy() {
                  this.loader.destroy()
              }
              abort() {
                  this.loader.abort()
              }
              load(r, n, o) {
                  e(r), this.loader.load(r, n, o)
              }
          }
      }
      static uuid() {
          const t = URL.createObjectURL(new Blob),
              e = t.toString();
          return URL.revokeObjectURL(t), e.slice(e.lastIndexOf("/") + 1)
      }
      static serialize(t) {
          const e = [],
              s = c => !Number.isNaN(c) && c != null && c !== "" && c !== !1,
              i = c => Math.round(c),
              r = c => i(c / 100) * 100,
              o = {
                  br: i,
                  d: i,
                  bl: r,
                  dl: r,
                  mtp: r,
                  nor: c => encodeURIComponent(c),
                  rtp: r,
                  tb: i
              },
              l = Object.keys(t || {}).sort();
          for (const c of l) {
              let h = t[c];
              if (!s(h) || c === "v" && h === 1 || c == "pr" && h === 1) continue;
              const u = o[c];
              u && (h = u(h));
              const d = typeof h;
              let f;
              c === "ot" || c === "sf" || c === "st" ? f = `${c}=${h}` : d === "boolean" ? f = c : d === "number" ? f = `${c}=${h}` : f = `${c}=${JSON.stringify(h)}`, e.push(f)
          }
          return e.join(",")
      }
      static toHeaders(t) {
          const e = Object.keys(t),
              s = {},
              i = ["Object", "Request", "Session", "Status"],
              r = [{}, {}, {}, {}],
              n = {
                  br: 0,
                  d: 0,
                  ot: 0,
                  tb: 0,
                  bl: 1,
                  dl: 1,
                  mtp: 1,
                  nor: 1,
                  nrr: 1,
                  su: 1,
                  cid: 2,
                  pr: 2,
                  sf: 2,
                  sid: 2,
                  st: 2,
                  v: 2,
                  bs: 3,
                  rtp: 3
              };
          for (const o of e) {
              const l = n[o] != null ? n[o] : 1;
              r[l][o] = t[o]
          }
          for (let o = 0; o < r.length; o++) {
              const l = bt.serialize(r[o]);
              l && (s[`CMCD-${i[o]}`] = l)
          }
          return s
      }
      static toQuery(t) {
          return `CMCD=${encodeURIComponent(bt.serialize(t))}`
      }
      static appendQueryToUri(t, e) {
          if (!e) return t;
          const s = t.includes("?") ? "&" : "?";
          return `${t}${s}${e}`
      }
  }
  const uo = 3e5;
  class fo {
      constructor(t) {
          this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t, this.log = x.log.bind(x, "[content-steering]:"), this.registerListeners()
      }
      registerListeners() {
          const t = this.hls;
          t.on(m.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(m.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.ERROR, this.onError, this)
      }
      unregisterListeners() {
          const t = this.hls;
          t && (t.off(m.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(m.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.ERROR, this.onError, this))
      }
      startLoad() {
          if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri)
              if (this.updated) {
                  const t = Math.max(this.timeToLoad * 1e3 - (performance.now() - this.updated), 0);
                  this.scheduleRefresh(this.uri, t)
              } else this.loadSteeringManifest(this.uri)
      }
      stopLoad() {
          this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer)
      }
      destroy() {
          this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null
      }
      removeLevel(t) {
          const e = this.levels;
          e && (this.levels = e.filter(s => s !== t))
      }
      onManifestLoading() {
          this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null
      }
      onManifestLoaded(t, e) {
          const {
              contentSteering: s
          } = e;
          s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad())
      }
      onManifestParsed(t, e) {
          this.audioTracks = e.audioTracks, this.subtitleTracks = e.subtitleTracks
      }
      onError(t, e) {
          const {
              errorAction: s
          } = e;
          if ((s == null ? void 0 : s.action) === rt.SendAlternateToPenaltyBox && s.flags === ft.MoveAllAlternatesMatchingHost) {
              let i = this.pathwayPriority;
              const r = this.pathwayId;
              this.penalizedPathways[r] || (this.penalizedPathways[r] = performance.now()), !i && this.levels && (i = this.levels.reduce((n, o) => (n.indexOf(o.pathwayId) === -1 && n.push(o.pathwayId), n), [])), i && i.length > 1 && (this.updatePathwayPriority(i), s.resolved = this.pathwayId !== r)
          }
      }
      filterParsedLevels(t) {
          this.levels = t;
          let e = this.getLevelsForPathway(this.pathwayId);
          if (e.length === 0) {
              const s = t[0].pathwayId;
              this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), e = this.getLevelsForPathway(s), this.pathwayId = s
          }
          return e.length !== t.length ? (this.log(`Found ${e.length}/${t.length} levels in Pathway "${this.pathwayId}"`), e) : t
      }
      getLevelsForPathway(t) {
          return this.levels === null ? [] : this.levels.filter(e => t === e.pathwayId)
      }
      updatePathwayPriority(t) {
          this.pathwayPriority = t;
          let e;
          const s = this.penalizedPathways,
              i = performance.now();
          Object.keys(s).forEach(r => {
              i - s[r] > uo && delete s[r]
          });
          for (let r = 0; r < t.length; r++) {
              const n = t[r];
              if (s[n]) continue;
              if (n === this.pathwayId) return;
              const o = this.hls.nextLoadLevel,
                  l = this.hls.levels[o];
              if (e = this.getLevelsForPathway(n), e.length > 0) {
                  this.log(`Setting Pathway to "${n}"`), this.pathwayId = n, this.hls.trigger(m.LEVELS_UPDATED, {
                      levels: e
                  });
                  const c = this.hls.levels[o];
                  l && c && this.levels && (c.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && c.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`), this.hls.nextLoadLevel = o);
                  break
              }
          }
      }
      clonePathways(t) {
          const e = this.levels;
          if (!e) return;
          const s = {},
              i = {};
          t.forEach(r => {
              const {
                  ID: n,
                  "BASE-ID": o,
                  "URI-REPLACEMENT": l
              } = r;
              if (e.some(h => h.pathwayId === n)) return;
              const c = this.getLevelsForPathway(o).map(h => {
                  const u = tt({}, h);
                  u.details = void 0, u.url = tr(h.uri, h.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l);
                  const d = new Q(h.attrs);
                  d["PATHWAY-ID"] = n;
                  const f = d.AUDIO && `${d.AUDIO}_clone_${n}`,
                      g = d.SUBTITLES && `${d.SUBTITLES}_clone_${n}`;
                  f && (s[d.AUDIO] = f, d.AUDIO = f), g && (i[d.SUBTITLES] = g, d.SUBTITLES = g), u.attrs = d;
                  const p = new Wt(u);
                  return le(p, "audio", f), le(p, "text", g), p
              });
              e.push(...c), si(this.audioTracks, s, l, n), si(this.subtitleTracks, i, l, n)
          })
      }
      loadSteeringManifest(t) {
          const e = this.hls.config,
              s = e.loader;
          this.loader && this.loader.destroy(), this.loader = new s(e);
          let i;
          try {
              i = new self.URL(t)
          } catch {
              this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${t}`);
              return
          }
          if (i.protocol !== "data:") {
              const h = (this.hls.bandwidthEstimate || e.abrEwmaDefaultEstimate) | 0;
              i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + h)
          }
          const r = {
                  responseType: "json",
                  url: i.href
              },
              n = e.steeringManifestLoadPolicy.default,
              o = n.errorRetry || n.timeoutRetry || {},
              l = {
                  loadPolicy: n,
                  timeout: n.maxLoadTimeMs,
                  maxRetry: o.maxNumRetry || 0,
                  retryDelay: o.retryDelayMs || 0,
                  maxRetryDelay: o.maxRetryDelayMs || 0
              },
              c = {
                  onSuccess: (h, u, d, f) => {
                      this.log(`Loaded steering manifest: "${i}"`);
                      const g = h.data;
                      if (g.VERSION !== 1) {
                          this.log(`Steering VERSION ${g.VERSION} not supported!`);
                          return
                      }
                      this.updated = performance.now(), this.timeToLoad = g.TTL;
                      const {
                          "RELOAD-URI": p,
                          "PATHWAY-CLONES": T,
                          "PATHWAY-PRIORITY": y
                      } = g;
                      if (p) try {
                          this.uri = new self.URL(p, i).href
                      } catch {
                          this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${p}`);
                          return
                      }
                      this.scheduleRefresh(this.uri || d.url), T && this.clonePathways(T), y && this.updatePathwayPriority(y)
                  },
                  onError: (h, u, d, f) => {
                      if (this.log(`Error loading steering manifest: ${h.code} ${h.text} (${u.url})`), this.stopLoad(), h.code === 410) {
                          this.enabled = !1, this.log(`Steering manifest ${u.url} no longer available`);
                          return
                      }
                      let g = this.timeToLoad * 1e3;
                      if (h.code === 429) {
                          const p = this.loader;
                          if (typeof(p == null ? void 0 : p.getResponseHeader) == "function") {
                              const T = p.getResponseHeader("Retry-After");
                              T && (g = parseFloat(T) * 1e3)
                          }
                          this.log(`Steering manifest ${u.url} rate limited`);
                          return
                      }
                      this.scheduleRefresh(this.uri || u.url, g)
                  },
                  onTimeout: (h, u, d) => {
                      this.log(`Timeout loading steering manifest (${u.url})`), this.scheduleRefresh(this.uri || u.url)
                  }
              };
          this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, l, c)
      }
      scheduleRefresh(t, e = this.timeToLoad * 1e3) {
          self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout(() => {
              this.loadSteeringManifest(t)
          }, e)
      }
  }
  
  function si(a, t, e, s) {
      a && Object.keys(t).forEach(i => {
          const r = a.filter(n => n.groupId === i).map(n => {
              const o = tt({}, n);
              return o.details = void 0, o.attrs = new Q(o.attrs), o.url = o.attrs.URI = tr(n.url, n.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", e), o.groupId = o.attrs["GROUP-ID"] = t[i], o.attrs["PATHWAY-ID"] = s, o
          });
          a.push(...r)
      })
  }
  
  function tr(a, t, e, s) {
      const {
          HOST: i,
          PARAMS: r,
          [e]: n
      } = s;
      let o;
      t && (o = n == null ? void 0 : n[t], o && (a = o));
      const l = new self.URL(a);
      return i && !o && (l.host = i), r && Object.keys(r).sort().forEach(c => {
          c && l.searchParams.set(c, r[c])
      }), l.href
  }
  const go = /^age:\s*[\d.]+\s*$/im;
  class er {
      constructor(t) {
          this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new he, this.retryDelay = 0
      }
      destroy() {
          this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
      }
      abortInternal() {
          const t = this.loader;
          self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, t.readyState !== 4 && (this.stats.aborted = !0, t.abort()))
      }
      abort() {
          var t;
          this.abortInternal(), (t = this.callbacks) != null && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
      }
      load(t, e, s) {
          if (this.stats.loading.start) throw new Error("Loader can only be used once.");
          this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = s, this.loadInternal()
      }
      loadInternal() {
          const {
              config: t,
              context: e
          } = this;
          if (!t) return;
          const s = this.loader = new self.XMLHttpRequest,
              i = this.stats;
          i.loading.first = 0, i.loaded = 0, i.aborted = !1;
          const r = this.xhrSetup;
          r ? Promise.resolve().then(() => {
              if (!this.stats.aborted) return r(s, e.url)
          }).catch(n => (s.open("GET", e.url, !0), r(s, e.url))).then(() => {
              this.stats.aborted || this.openAndSendXhr(s, e, t)
          }).catch(n => {
              this.callbacks.onError({
                  code: s.status,
                  text: n.message
              }, e, s, i)
          }) : this.openAndSendXhr(s, e, t)
      }
      openAndSendXhr(t, e, s) {
          t.readyState || t.open("GET", e.url, !0);
          const i = this.context.headers,
              {
                  maxTimeToFirstByteMs: r,
                  maxLoadTimeMs: n
              } = s.loadPolicy;
          if (i)
              for (const o in i) t.setRequestHeader(o, i[o]);
          e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && F(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), t.send()
      }
      readystatechange() {
          const {
              context: t,
              loader: e,
              stats: s
          } = this;
          if (!t || !e) return;
          const i = e.readyState,
              r = this.config;
          if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
              self.clearTimeout(this.requestTimeout), e.onreadystatechange = null, e.onprogress = null;
              const n = e.status,
                  o = e.responseType !== "text";
              if (n >= 200 && n < 300 && (o && e.response || e.responseText !== null)) {
                  s.loading.end = Math.max(self.performance.now(), s.loading.first);
                  const l = o ? e.response : e.responseText,
                      c = e.responseType === "arraybuffer" ? l.byteLength : l.length;
                  if (s.loaded = s.total = c, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first), !this.callbacks) return;
                  const h = this.callbacks.onProgress;
                  if (h && h(s, t, l, e), !this.callbacks) return;
                  const u = {
                      url: e.responseURL,
                      data: l,
                      code: n
                  };
                  this.callbacks.onSuccess(u, s, t, e)
              } else {
                  const l = r.loadPolicy.errorRetry,
                      c = s.retry;
                  oe(l, c, !1, n) ? this.retry(l) : (x.error(`${n} while loading ${t.url}`), this.callbacks.onError({
                      code: n,
                      text: e.statusText
                  }, t, e, s))
              }
          }
      }
      loadtimeout() {
          var t;
          const e = (t = this.config) == null ? void 0 : t.loadPolicy.timeoutRetry,
              s = this.stats.retry;
          if (oe(e, s, !0)) this.retry(e);
          else {
              x.warn(`timeout while loading ${this.context.url}`);
              const i = this.callbacks;
              i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader))
          }
      }
      retry(t) {
          const {
              context: e,
              stats: s
          } = this;
          this.retryDelay = ze(t, s.retry), s.retry++, x.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${e.url}, retrying ${s.retry}/${t.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay)
      }
      loadprogress(t) {
          const e = this.stats;
          e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
      }
      getCacheAge() {
          let t = null;
          if (this.loader && go.test(this.loader.getAllResponseHeaders())) {
              const e = this.loader.getResponseHeader("age");
              t = e ? parseFloat(e) : null
          }
          return t
      }
      getResponseHeader(t) {
          return this.loader && new RegExp(`^${t}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null
      }
  }
  
  function mo() {
      if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
          return new self.ReadableStream({}), !0
      } catch {}
      return !1
  }
  const po = /(\d+)-(\d+)\/(\d+)/;
  class ii {
      constructor(t) {
          this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || Eo, this.controller = new self.AbortController, this.stats = new he
      }
      destroy() {
          this.loader = this.callbacks = null, this.abortInternal()
      }
      abortInternal() {
          const t = this.response;
          t != null && t.ok || (this.stats.aborted = !0, this.controller.abort())
      }
      abort() {
          var t;
          this.abortInternal(), (t = this.callbacks) != null && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
      }
      load(t, e, s) {
          const i = this.stats;
          if (i.loading.start) throw new Error("Loader can only be used once.");
          i.loading.start = self.performance.now();
          const r = To(t, this.controller.signal),
              n = s.onProgress,
              o = t.responseType === "arraybuffer",
              l = o ? "byteLength" : "length",
              {
                  maxTimeToFirstByteMs: c,
                  maxLoadTimeMs: h
              } = e.loadPolicy;
          this.context = t, this.config = e, this.callbacks = s, this.request = this.fetchSetup(t, r), self.clearTimeout(this.requestTimeout), e.timeout = c && F(c) ? c : h, this.requestTimeout = self.setTimeout(() => {
              this.abortInternal(), s.onTimeout(i, t, this.response)
          }, e.timeout), self.fetch(this.request).then(u => {
              this.response = this.loader = u;
              const d = Math.max(self.performance.now(), i.loading.start);
              if (self.clearTimeout(this.requestTimeout), e.timeout = h, this.requestTimeout = self.setTimeout(() => {
                      this.abortInternal(), s.onTimeout(i, t, this.response)
                  }, h - (d - i.loading.start)), !u.ok) {
                  const {
                      status: f,
                      statusText: g
                  } = u;
                  throw new So(g || "fetch, bad network response", f, u)
              }
              return i.loading.first = d, i.total = xo(u.headers) || i.total, n && F(e.highWaterMark) ? this.loadProgressively(u, i, t, e.highWaterMark, n) : o ? u.arrayBuffer() : t.responseType === "json" ? u.json() : u.text()
          }).then(u => {
              const {
                  response: d
              } = this;
              self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
              const f = u[l];
              f && (i.loaded = i.total = f);
              const g = {
                  url: d.url,
                  data: u,
                  code: d.status
              };
              n && !F(e.highWaterMark) && n(i, t, u, d), s.onSuccess(g, i, t, d)
          }).catch(u => {
              if (self.clearTimeout(this.requestTimeout), i.aborted) return;
              const d = u && u.code || 0,
                  f = u ? u.message : null;
              s.onError({
                  code: d,
                  text: f
              }, t, u ? u.details : null, i)
          })
      }
      getCacheAge() {
          let t = null;
          if (this.response) {
              const e = this.response.headers.get("age");
              t = e ? parseFloat(e) : null
          }
          return t
      }
      getResponseHeader(t) {
          return this.response ? this.response.headers.get(t) : null
      }
      loadProgressively(t, e, s, i = 0, r) {
          const n = new Vi,
              o = t.body.getReader(),
              l = () => o.read().then(c => {
                  if (c.done) return n.dataLength && r(e, s, n.flush(), t), Promise.resolve(new ArrayBuffer(0));
                  const h = c.value,
                      u = h.length;
                  return e.loaded += u, u < i || n.dataLength ? (n.push(h), n.dataLength >= i && r(e, s, n.flush(), t)) : r(e, s, h, t), l()
              }).catch(() => Promise.reject());
          return l()
      }
  }
  
  function To(a, t) {
      const e = {
          method: "GET",
          mode: "cors",
          credentials: "same-origin",
          signal: t,
          headers: new self.Headers(tt({}, a.headers))
      };
      return a.rangeEnd && e.headers.set("Range", "bytes=" + a.rangeStart + "-" + String(a.rangeEnd - 1)), e
  }
  
  function yo(a) {
      const t = po.exec(a);
      if (t) return parseInt(t[2]) - parseInt(t[1]) + 1
  }
  
  function xo(a) {
      const t = a.get("Content-Range");
      if (t) {
          const s = yo(t);
          if (F(s)) return s
      }
      const e = a.get("Content-Length");
      if (e) return parseInt(e)
  }
  
  function Eo(a, t) {
      return new self.Request(a.url, t)
  }
  class So extends Error {
      constructor(t, e, s) {
          super(t), this.code = void 0, this.details = void 0, this.code = e, this.details = s
      }
  }
  const vo = /\s/,
      Ao = {
          newCue(a, t, e, s) {
              const i = [];
              let r, n, o, l, c;
              const h = self.VTTCue || self.TextTrackCue;
              for (let d = 0; d < s.rows.length; d++)
                  if (r = s.rows[d], o = !0, l = 0, c = "", !r.isEmpty()) {
                      var u;
                      for (let p = 0; p < r.chars.length; p++) vo.test(r.chars[p].uchar) && o ? l++ : (c += r.chars[p].uchar, o = !1);
                      r.cueStartTime = t, t === e && (e += 1e-4), l >= 16 ? l-- : l++;
                      const f = zi(c.trim()),
                          g = os(t, e, f);
                      a != null && (u = a.cues) != null && u.getCueById(g) || (n = new h(t, e, f), n.id = g, n.line = d + 1, n.align = "left", n.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), i.push(n))
                  } return a && i.length && (i.sort((d, f) => d.line === "auto" || f.line === "auto" ? 0 : d.line > 8 && f.line > 8 ? f.line - d.line : d.line - f.line), i.forEach(d => vi(a, d))), i
          }
      },
      Lo = {
          maxTimeToFirstByteMs: 8e3,
          maxLoadTimeMs: 2e4,
          timeoutRetry: null,
          errorRetry: null
      },
      Ro = at(at({
          autoStartLoad: !0,
          startPosition: -1,
          defaultAudioCodec: void 0,
          debug: !1,
          capLevelOnFPSDrop: !1,
          capLevelToPlayerSize: !1,
          ignoreDevicePixelRatio: !1,
          initialLiveManifestSize: 1,
          maxBufferLength: 30,
          backBufferLength: 1 / 0,
          maxBufferSize: 60 * 1e3 * 1e3,
          maxBufferHole: .1,
          highBufferWatchdogPeriod: 2,
          nudgeOffset: .1,
          nudgeMaxRetry: 3,
          maxFragLookUpTolerance: .25,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 1 / 0,
          liveSyncDuration: void 0,
          liveMaxLatencyDuration: void 0,
          maxLiveSyncPlaybackRate: 1,
          liveDurationInfinity: !1,
          liveBackBufferLength: null,
          maxMaxBufferLength: 600,
          enableWorker: !0,
          workerPath: null,
          enableSoftwareAES: !0,
          startLevel: void 0,
          startFragPrefetch: !1,
          fpsDroppedMonitoringPeriod: 5e3,
          fpsDroppedMonitoringThreshold: .2,
          appendErrorMaxRetry: 3,
          loader: er,
          fLoader: void 0,
          pLoader: void 0,
          xhrSetup: void 0,
          licenseXhrSetup: void 0,
          licenseResponseCallback: void 0,
          abrController: Da,
          bufferController: Na,
          capLevelController: ls,
          errorController: En,
          fpsController: lo,
          stretchShortVideoTrack: !1,
          maxAudioFramesDrift: 1,
          forceKeyFrameOnDiscontinuity: !0,
          abrEwmaFastLive: 3,
          abrEwmaSlowLive: 9,
          abrEwmaFastVoD: 3,
          abrEwmaSlowVoD: 9,
          abrEwmaDefaultEstimate: 5e5,
          abrBandWidthFactor: .95,
          abrBandWidthUpFactor: .7,
          abrMaxWithRealBitrate: !1,
          maxStarvationDelay: 4,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          emeEnabled: !1,
          widevineLicenseUrl: void 0,
          drmSystems: {},
          drmSystemOptions: {},
          requestMediaKeySystemAccessFunc: ci,
          testBandwidth: !0,
          progressive: !1,
          lowLatencyMode: !0,
          cmcd: void 0,
          enableDateRangeMetadataCues: !0,
          enableEmsgMetadataCues: !0,
          enableID3MetadataCues: !0,
          certLoadPolicy: {
              default: Lo
          },
          keyLoadPolicy: {
              default: {
                  maxTimeToFirstByteMs: 8e3,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                      maxNumRetry: 1,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 2e4,
                      backoff: "linear"
                  },
                  errorRetry: {
                      maxNumRetry: 8,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 2e4,
                      backoff: "linear"
                  }
              }
          },
          manifestLoadPolicy: {
              default: {
                  maxTimeToFirstByteMs: 1 / 0,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                      maxNumRetry: 2,
                      retryDelayMs: 0,
                      maxRetryDelayMs: 0
                  },
                  errorRetry: {
                      maxNumRetry: 1,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 8e3
                  }
              }
          },
          playlistLoadPolicy: {
              default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                      maxNumRetry: 2,
                      retryDelayMs: 0,
                      maxRetryDelayMs: 0
                  },
                  errorRetry: {
                      maxNumRetry: 2,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 8e3
                  }
              }
          },
          fragLoadPolicy: {
              default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 12e4,
                  timeoutRetry: {
                      maxNumRetry: 4,
                      retryDelayMs: 0,
                      maxRetryDelayMs: 0
                  },
                  errorRetry: {
                      maxNumRetry: 6,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 8e3
                  }
              }
          },
          steeringManifestLoadPolicy: {
              default: {
                  maxTimeToFirstByteMs: 1e4,
                  maxLoadTimeMs: 2e4,
                  timeoutRetry: {
                      maxNumRetry: 2,
                      retryDelayMs: 0,
                      maxRetryDelayMs: 0
                  },
                  errorRetry: {
                      maxNumRetry: 1,
                      retryDelayMs: 1e3,
                      maxRetryDelayMs: 8e3
                  }
              }
          },
          manifestLoadingTimeOut: 1e4,
          manifestLoadingMaxRetry: 1,
          manifestLoadingRetryDelay: 1e3,
          manifestLoadingMaxRetryTimeout: 64e3,
          levelLoadingTimeOut: 1e4,
          levelLoadingMaxRetry: 4,
          levelLoadingRetryDelay: 1e3,
          levelLoadingMaxRetryTimeout: 64e3,
          fragLoadingTimeOut: 2e4,
          fragLoadingMaxRetry: 6,
          fragLoadingRetryDelay: 1e3,
          fragLoadingMaxRetryTimeout: 64e3
      }, Io()), {}, {
          subtitleStreamController: Pa,
          subtitleTrackController: Oa,
          timelineController: no,
          audioStreamController: ka,
          audioTrackController: _a,
          emeController: Bt,
          cmcdController: bt,
          contentSteeringController: fo
      });
  
  function Io() {
      return {
          cueHandler: Ao,
          enableWebVTT: !0,
          enableIMSC1: !0,
          enableCEA708Captions: !0,
          captionsTextTrack1Label: "English",
          captionsTextTrack1LanguageCode: "en",
          captionsTextTrack2Label: "Spanish",
          captionsTextTrack2LanguageCode: "es",
          captionsTextTrack3Label: "Unknown CC",
          captionsTextTrack3LanguageCode: "",
          captionsTextTrack4Label: "Unknown CC",
          captionsTextTrack4LanguageCode: "",
          renderTextTracksNatively: !0
      }
  }
  
  function bo(a, t) {
      if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
      if (t.liveMaxLatencyDurationCount !== void 0 && (t.liveSyncDurationCount === void 0 || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
      if (t.liveMaxLatencyDuration !== void 0 && (t.liveSyncDuration === void 0 || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
      const e = Ye(a),
          s = ["manifest", "level", "frag"],
          i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
      return s.forEach(r => {
          const n = `${r==="level"?"playlist":r}LoadPolicy`,
              o = t[n] === void 0,
              l = [];
          i.forEach(c => {
              const h = `${r}Loading${c}`,
                  u = t[h];
              if (u !== void 0 && o) {
                  l.push(h);
                  const d = e[n].default;
                  switch (t[n] = {
                          default: d
                      }, c) {
                      case "TimeOut":
                          d.maxLoadTimeMs = u, d.maxTimeToFirstByteMs = u;
                          break;
                      case "MaxRetry":
                          d.errorRetry.maxNumRetry = u, d.timeoutRetry.maxNumRetry = u;
                          break;
                      case "RetryDelay":
                          d.errorRetry.retryDelayMs = u, d.timeoutRetry.retryDelayMs = u;
                          break;
                      case "MaxRetryTimeout":
                          d.errorRetry.maxRetryDelayMs = u, d.timeoutRetry.maxRetryDelayMs = u;
                          break
                  }
              }
          }), l.length && x.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${n}": ${JSON.stringify(t[n])}`)
      }), at(at({}, e), t)
  }
  
  function Ye(a) {
      return a && typeof a == "object" ? Array.isArray(a) ? a.map(Ye) : Object.keys(a).reduce((t, e) => (t[e] = Ye(a[e]), t), {}) : a
  }
  
  function Do(a) {
      const t = a.loader;
      t !== ii && t !== er ? (x.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = !1) : mo() && (a.loader = ii, a.progressive = !0, a.enableSoftwareAES = !0, x.log("[config]: Progressive streaming enabled, using FetchLoader"))
  }
  class Ut {
      static get version() {
          return "1.4.14"
      }
      static isSupported() {
          return Bn()
      }
      static get Events() {
          return m
      }
      static get ErrorTypes() {
          return N
      }
      static get ErrorDetails() {
          return L
      }
      static get DefaultConfig() {
          return Ut.defaultConfig ? Ut.defaultConfig : Ro
      }
      static set DefaultConfig(t) {
          Ut.defaultConfig = t
      }
      constructor(t = {}) {
          this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new ns, this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, hr(t.debug || !1, "Hls instance");
          const e = this.config = bo(Ut.DefaultConfig, t);
          this.userConfig = t, this._autoLevelCapping = -1, e.progressive && Do(e);
          const {
              abrController: s,
              bufferController: i,
              capLevelController: r,
              errorController: n,
              fpsController: o
          } = e, l = new n(this), c = this.abrController = new s(this), h = this.bufferController = new i(this), u = this.capLevelController = new r(this), d = new o(this), f = new tn(this), g = new an(this), p = e.contentSteeringController, T = p ? new p(this) : null, y = this.levelController = new vn(this, T), S = new An(this), E = new Rn(this.config), R = this.streamController = new Ia(this, S, E);
          u.setStreamController(R), d.setStreamController(R);
          const A = [f, y, R];
          T && A.splice(1, 0, T), this.networkControllers = A;
          const _ = [c, h, u, d, g, S];
          this.audioTrackController = this.createController(e.audioTrackController, A);
          const D = e.audioStreamController;
          D && A.push(new D(this, S, E)), this.subtitleTrackController = this.createController(e.subtitleTrackController, A);
          const C = e.subtitleStreamController;
          C && A.push(new C(this, S, E)), this.createController(e.timelineController, _), E.emeController = this.emeController = this.createController(e.emeController, _), this.cmcdController = this.createController(e.cmcdController, _), this.latencyController = this.createController(on, _), this.coreComponents = _, A.push(l);
          const k = l.onErrorOut;
          typeof k == "function" && this.on(m.ERROR, k, l)
      }
      createController(t, e) {
          if (t) {
              const s = new t(this);
              return e && e.push(s), s
          }
          return null
      }
      on(t, e, s = this) {
          this._emitter.on(t, e, s)
      }
      once(t, e, s = this) {
          this._emitter.once(t, e, s)
      }
      removeAllListeners(t) {
          this._emitter.removeAllListeners(t)
      }
      off(t, e, s = this, i) {
          this._emitter.off(t, e, s, i)
      }
      listeners(t) {
          return this._emitter.listeners(t)
      }
      emit(t, e, s) {
          return this._emitter.emit(t, e, s)
      }
      trigger(t, e) {
          if (this.config.debug) return this.emit(t, t, e);
          try {
              return this.emit(t, t, e)
          } catch (s) {
              x.error("An internal error happened while handling event " + t + '. Error message: "' + s.message + '". Here is a stacktrace:', s), this.trigger(m.ERROR, {
                  type: N.OTHER_ERROR,
                  details: L.INTERNAL_EXCEPTION,
                  fatal: !1,
                  event: t,
                  error: s
              })
          }
          return !1
      }
      listenerCount(t) {
          return this._emitter.listenerCount(t)
      }
      destroy() {
          x.log("destroy"), this.trigger(m.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(e => e.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach(e => e.destroy()), this.coreComponents.length = 0;
          const t = this.config;
          t.xhrSetup = t.fetchSetup = void 0, this.userConfig = null
      }
      attachMedia(t) {
          x.log("attachMedia"), this._media = t, this.trigger(m.MEDIA_ATTACHING, {
              media: t
          })
      }
      detachMedia() {
          x.log("detachMedia"), this.trigger(m.MEDIA_DETACHING, void 0), this._media = null
      }
      loadSource(t) {
          this.stopLoad();
          const e = this.media,
              s = this.url,
              i = this.url = qe.buildAbsoluteURL(self.location.href, t, {
                  alwaysNormalize: !0
              });
          x.log(`loadSource:${i}`), e && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(m.MANIFEST_LOADING, {
              url: t
          })
      }
      startLoad(t = -1) {
          x.log(`startLoad(${t})`), this.networkControllers.forEach(e => {
              e.startLoad(t)
          })
      }
      stopLoad() {
          x.log("stopLoad"), this.networkControllers.forEach(t => {
              t.stopLoad()
          })
      }
      swapAudioCodec() {
          x.log("swapAudioCodec"), this.streamController.swapAudioCodec()
      }
      recoverMediaError() {
          x.log("recoverMediaError");
          const t = this._media;
          this.detachMedia(), t && this.attachMedia(t)
      }
      removeLevel(t, e = 0) {
          this.levelController.removeLevel(t, e)
      }
      get levels() {
          const t = this.levelController.levels;
          return t || []
      }
      get currentLevel() {
          return this.streamController.currentLevel
      }
      set currentLevel(t) {
          x.log(`set currentLevel:${t}`), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
      }
      get nextLevel() {
          return this.streamController.nextLevel
      }
      set nextLevel(t) {
          x.log(`set nextLevel:${t}`), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
      }
      get loadLevel() {
          return this.levelController.level
      }
      set loadLevel(t) {
          x.log(`set loadLevel:${t}`), this.levelController.manualLevel = t
      }
      get nextLoadLevel() {
          return this.levelController.nextLoadLevel
      }
      set nextLoadLevel(t) {
          this.levelController.nextLoadLevel = t
      }
      get firstLevel() {
          return Math.max(this.levelController.firstLevel, this.minAutoLevel)
      }
      set firstLevel(t) {
          x.log(`set firstLevel:${t}`), this.levelController.firstLevel = t
      }
      get startLevel() {
          return this.levelController.startLevel
      }
      set startLevel(t) {
          x.log(`set startLevel:${t}`), t !== -1 && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
      }
      get capLevelToPlayerSize() {
          return this.config.capLevelToPlayerSize
      }
      set capLevelToPlayerSize(t) {
          const e = !!t;
          e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
      }
      get autoLevelCapping() {
          return this._autoLevelCapping
      }
      get bandwidthEstimate() {
          const {
              bwEstimator: t
          } = this.abrController;
          return t ? t.getEstimate() : NaN
      }
      get ttfbEstimate() {
          const {
              bwEstimator: t
          } = this.abrController;
          return t ? t.getEstimateTTFB() : NaN
      }
      set autoLevelCapping(t) {
          this._autoLevelCapping !== t && (x.log(`set autoLevelCapping:${t}`), this._autoLevelCapping = t)
      }
      get maxHdcpLevel() {
          return this._maxHdcpLevel
      }
      set maxHdcpLevel(t) {
          Ge.indexOf(t) > -1 && (this._maxHdcpLevel = t)
      }
      get autoLevelEnabled() {
          return this.levelController.manualLevel === -1
      }
      get manualLevel() {
          return this.levelController.manualLevel
      }
      get minAutoLevel() {
          const {
              levels: t,
              config: {
                  minAutoBitrate: e
              }
          } = this;
          if (!t) return 0;
          const s = t.length;
          for (let i = 0; i < s; i++)
              if (t[i].maxBitrate >= e) return i;
          return 0
      }
      get maxAutoLevel() {
          const {
              levels: t,
              autoLevelCapping: e,
              maxHdcpLevel: s
          } = this;
          let i;
          if (e === -1 && t && t.length ? i = t.length - 1 : i = e, s)
              for (let r = i; r--;) {
                  const n = t[r].attrs["HDCP-LEVEL"];
                  if (n && n <= s) return r
              }
          return i
      }
      get nextAutoLevel() {
          return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
      }
      set nextAutoLevel(t) {
          this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
      }
      get playingDate() {
          return this.streamController.currentProgramDateTime
      }
      get mainForwardBufferInfo() {
          return this.streamController.getMainFwdBufferInfo()
      }
      get audioTracks() {
          const t = this.audioTrackController;
          return t ? t.audioTracks : []
      }
      get audioTrack() {
          const t = this.audioTrackController;
          return t ? t.audioTrack : -1
      }
      set audioTrack(t) {
          const e = this.audioTrackController;
          e && (e.audioTrack = t)
      }
      get subtitleTracks() {
          const t = this.subtitleTrackController;
          return t ? t.subtitleTracks : []
      }
      get subtitleTrack() {
          const t = this.subtitleTrackController;
          return t ? t.subtitleTrack : -1
      }
      get media() {
          return this._media
      }
      set subtitleTrack(t) {
          const e = this.subtitleTrackController;
          e && (e.subtitleTrack = t)
      }
      get subtitleDisplay() {
          const t = this.subtitleTrackController;
          return t ? t.subtitleDisplay : !1
      }
      set subtitleDisplay(t) {
          const e = this.subtitleTrackController;
          e && (e.subtitleDisplay = t)
      }
      get lowLatencyMode() {
          return this.config.lowLatencyMode
      }
      set lowLatencyMode(t) {
          this.config.lowLatencyMode = t
      }
      get liveSyncPosition() {
          return this.latencyController.liveSyncPosition
      }
      get latency() {
          return this.latencyController.latency
      }
      get maxLatency() {
          return this.latencyController.maxLatency
      }
      get targetLatency() {
          return this.latencyController.targetLatency
      }
      get drift() {
          return this.latencyController.drift
      }
      get forceStartLoad() {
          return this.streamController.forceStartLoad
      }
  }
  Ut.defaultConfig = void 0;
  export {
      Ut as H
  };
  //# sourceMappingURL=hls-Di-l_7QN.js.map